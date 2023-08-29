const User = require("../../models/User");

async function getUsers(req, res) {
  try {
    const users = await User.findAll();

    if (users.length === 0) {
      return res.status(404).json({
        isSuccess: false,
        message: "No users found",
      });
    }

    res.status(200).json({
      isSuccess: true,
      users: users,
    });
  } catch (error) {
    res.status(500).json({
      isSuccess: false,
      message: error.message,
    });
  }
}

module.exports = getUsers;
