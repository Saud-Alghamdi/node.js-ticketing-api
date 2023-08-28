const express = require("express");
const router = express.Router();
const createUser = require("../controllers/user/createUser");

router.post("/users/createUser", async (req, res, next) => {
  try {
    await createUser(req, res);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
