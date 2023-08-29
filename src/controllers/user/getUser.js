const User = require("../../models/User");
const { validateUserExists } = require("../../validators/userValidator");

async function getUser(req, res) {
  const id = Number(req.params.id);

  try {
    await validateUserExists(id);
    const user = await User.findOne({ where: { id: id } });

    res.status(200).json({
      isSuccess: true,
      user: user,
    });
  } catch (error) {
    res.status(404).json({
      isSuccess: false,
      message: error.message,
    });
  }
}

module.exports = getUser;
