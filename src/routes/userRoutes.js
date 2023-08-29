const express = require("express");
const router = express.Router();
const createUser = require("../controllers/user/createUser");
const deleteUser = require("../controllers/user/deleteUser");
const updateUser = require("../controllers/user/updateUser");

router.post("/users/createUser", async (req, res) => await createUser(req, res));

router.delete("/users/deleteUser/:id", async (req, res) => await deleteUser(req, res));

router.put("/users/updateUser/:id", async (req, res) => await updateUser(req, res));

module.exports = router;
