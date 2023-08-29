const Ticket = require("../../models/Ticket");

async function getTicket(req, res) {
  const { id } = req.params;

  try {
    const ticket = await Ticket.findOne({ where: { id: id } });

    if (!ticket) {
      throw new Error("Ticket not found");
    }

    res.status(200).json({
      isSuccess: true,
      message: "Ticket retrieved sucessfully.",
      data: {
        ticket: ticket,
      },
    });
  } catch (error) {
    res.status(400).json({ isSuccess: false, message: error.message });
  }
}

module.exports = getTicket;
