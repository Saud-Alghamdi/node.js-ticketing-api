const User = require("../../models/User");
const { validateUserExists, validateName, validateEmail, validateRole } = require("../../validators/userValidator");

async function updateUser(req, res) {
  const id = Number(req.params.id);
  const { name, email, role } = req.body;

  const userExistsValidation = await validateUserExists(id);

  if (!userExistsValidation.isValid) {
    return res.status(404).json({
      isSuccess: false,
      message: userExistsValidation.message,
    });
  }

  let updateData = {};

  if (name !== undefined) {
    const nameValidation = validateName(name);
    if (!nameValidation.isValid) {
      return res.status(400).json({
        isSuccess: false,
        message: nameValidation.message,
      });
    }
    updateData.name = name;
  }

  if (email !== undefined) {
    const emailValidation = await validateEmail(email);
    if (!emailValidation.isValid) {
      return res.status(400).json({
        isSuccess: false,
        message: emailValidation.message,
      });
    }
    updateData.email = email;
  }

  if (role !== undefined) {
    const roleValidation = validateRole(role);
    if (!roleValidation.isValid) {
      return res.status(400).json({
        isSuccess: false,
        message: roleValidation.message,
      });
    }
    updateData.role = role;
  }

  try {
    await User.update(updateData, { where: { id: id } });

    res.status(200).json({
      isSuccess: true,
      message: "User data updated successfully!",
    });
  } catch (error) {
    res.status(500).json({
      isSuccess: false,
      message: error.message,
    });
  }
}

module.exports = updateUser;
