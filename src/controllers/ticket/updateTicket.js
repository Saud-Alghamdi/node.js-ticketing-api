const Ticket = require("../../models/Ticket");
const { validateTitle, validateDescription } = require("../../validators/ticketValidator");
const checkFieldsPresent = require("../../middleware/checkFieldsPresent");

async function updateTicket(req, res) {
  const { id } = req.params;
  const { title, description } = req.body;

  try {
    const ticket = await Ticket.findOne({ where: { id: id } });

    if (!ticket) {
      throw new Error("Ticket not found");
    }

    let updateData = {};

    validateTitle(title);
    updateData.title = title;

    validateDescription(description);
    updateData.description = description;

    await Ticket.update(updateData, { where: { id: id } });

    res.status(200).json({
      isSuccess: true,
      message: "Ticket updated successfully!",
    });
  } catch (error) {
    res.status(400).json({ isSuccess: false, message: error.message });
  }
}

module.exports = [checkFieldsPresent(["title", "description", "createdBy", "assignedTo"]), updateTicket];
