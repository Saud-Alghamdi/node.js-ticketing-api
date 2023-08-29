const express = require("express");
const router = express.Router();
const createUser = require("../controllers/user/createUser");
const deleteUser = require("../controllers/user/deleteUser");

router.post("/users/createUser", async (req, res) => await createUser(req, res));

router.delete("/users/deleteUser/:id", async (req, res) => await deleteUser(req, res));

module.exports = router;
