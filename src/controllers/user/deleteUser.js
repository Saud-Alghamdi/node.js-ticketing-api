const User = require("../../models/User");
const { validateUserExists } = require("../../validators/userValidator");

async function deleteUser(req, res) {
  const id = Number(req.params.id);

  const userExistsValidation = await validateUserExists(id);

  if (!userExistsValidation.isValid) {
    return res.status(404).json({
      isSuccess: false,
      message: userExistsValidation.message,
    });
  }

  try {
    await User.destroy({ where: { id: id } });

    res.status(200).json({
      isSuccess: true,
      message: "User deleted successfully!",
    });
  } catch (error) {
    res.status(500).json({
      isSuccess: false,
      message: error.message,
    });
  }
}

module.exports = deleteUser;
