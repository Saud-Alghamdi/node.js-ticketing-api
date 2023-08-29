const express = require("express");
const router = express.Router();
const createUser = require("../controllers/user/createUser");
const deleteUser = require("../controllers/user/deleteUser");
const updateUser = require("../controllers/user/updateUser");
const getUser = require("../controllers/user/getUser");
const getUsers = require("../controllers/user/getUsers");

router.post("/users", createUser);

router.delete("/users/:id", deleteUser);

router.put("/users/:id", updateUser);

router.get("/users/:id", getUser);

router.get("/users", getUsers);

module.exports = router;
