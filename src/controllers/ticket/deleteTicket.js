const Ticket = require("../../models/Ticket");

async function deleteTicket(req, res) {
  const { id } = req.params;

  try {
    const ticket = await Ticket.findOne({ where: { id: id } });

    if (!ticket) {
      throw new Error("Ticket not found");
    }

    await Ticket.destroy({ where: { id: id } });

    res.status(200).json({
      isSuccess: true,
      message: "Ticket deleted successfully!",
    });
  } catch (error) {
    res.status(400).json({ isSuccess: false, message: error.message });
  }
}

module.exports = deleteTicket;
