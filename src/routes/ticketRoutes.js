const express = require("express");
const router = express.Router();
const createTicket = require("../controllers/ticket/createTicket");
const updateTicket = require("../controllers/ticket/updateTicket");
const deleteTicket = require("../controllers/ticket/deleteTicket");
const getTicket = require("../controllers/ticket/getTicket");
const getTickets = require("../controllers/ticket/getTickets");

router.post("/tickets", createTicket);

router.put("/tickets/:id", updateTicket);

router.delete("/tickets/:id", deleteTicket);

router.get("/tickets/:id", getTicket);

router.get("/tickets", getTickets);

module.exports = router;
