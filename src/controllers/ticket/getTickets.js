const Ticket = require("../../models/Ticket");

async function getTickets(req, res) {
  try {
    const tickets = await Ticket.findAll();

    if (tickets.length === 0) {
      return res.status(404).json({
        isSuccess: false,
        message: "No tickets found",
      });
    }

    res.status(200).json({
      isSuccess: true,
      message: "Tickets retrieved successfully",
      data: {
        tickets: tickets,
      },
    });
  } catch (error) {
    res.status(500).json({
      isSuccess: false,
      message: error.message,
    });
  }
}

module.exports = getTickets;
