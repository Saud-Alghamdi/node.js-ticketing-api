const Ticket = require("../../models/Ticket");
const { validateTitle, validateDescription } = require("../../validators/ticketValidator");
const { validateUserExists } = require("../../validators/userValidator");
const checkFieldsPresent = require("../../middleware/checkFieldsPresent");

async function createTicket(req, res) {
  const { title, description, createdBy, assignedTo } = req.body;

  try {
    validateTitle(title);
    validateDescription(description);
    await validateUserExists(createdBy);
    await validateUserExists(assignedTo);

    const newTicket = await Ticket.create({
      title,
      description,
      createdBy,
      assignedTo,
    });

    res.status(201).json({
      isSuccess: true,
      message: "Ticket created successfully!",
      data: {
        ticket: newTicket,
      },
    });
  } catch (error) {
    res.status(400).json({ isSuccess: false, message: error.message });
  }
}

module.exports = [checkFieldsPresent(["title", "description", "createdBy", "assignedTo"]), createTicket];
