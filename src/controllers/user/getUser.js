const User = require("../../models/User");
const { validateUserExists } = require("../../validators/userValidator");

async function getUser(req, res) {
  const id = Number(req.params.id);

  const userExistsValidation = await validateUserExists(id);

  if (!userExistsValidation.isValid) {
    return res.status(404).json({
      isSuccess: false,
      message: userExistsValidation.message,
    });
  }

  try {
    const user = await User.findOne({ where: { id: id } });

    if (!user) {
      return res.status(404).json({
        isSuccess: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      isSuccess: true,
      user: user,
    });
  } catch (error) {
    res.status(500).json({
      isSuccess: false,
      message: error.message,
    });
  }
}

module.exports = getUser;
