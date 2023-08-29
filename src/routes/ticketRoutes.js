const express = require("express");
const router = express.Router();
const createTicket = require("../controllers/ticket/createTicket");
const updateTicket = require("../controllers/ticket/updateTicket");
const deleteTicket = require("../controllers/ticket/deleteTicket");
const getTicket = require("../controllers/ticket/getTicket");
const getTickets = require("../controllers/ticket/getTickets");

router.post("/tickets", async (req, res) => await createTicket(req, res));

router.put("/tickets/:id", async (req, res) => await updateTicket(req, res));

router.delete("/tickets/:id", async (req, res) => await deleteTicket(req, res));

router.get("/tickets/:id", async (req, res) => await getTicket(req, res));

router.get("/tickets", async (req, res) => await getTickets(req, res));

module.exports = router;
