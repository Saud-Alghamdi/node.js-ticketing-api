const express = require("express");
const router = express.Router();
const createUser = require("../controllers/user/createUser");
const deleteUser = require("../controllers/user/deleteUser");
const updateUser = require("../controllers/user/updateUser");
const getUser = require("../controllers/user/getUser");
const getUsers = require("../controllers/user/getUsers");

router.post("/users", async (req, res) => await createUser(req, res));

router.delete("/users/:id", async (req, res) => await deleteUser(req, res));

router.put("/users/:id", async (req, res) => await updateUser(req, res));

router.get("/users/:id", async (req, res) => await getUser(req, res));

router.get("/users", async (req, res) => await getUsers(req, res));

module.exports = router;
