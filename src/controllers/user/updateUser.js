const User = require("../../models/User");
const { validateUserExists, validateName, validateEmail, validateRole } = require("../../validators/userValidator");
const checkFieldsPresent = require("../../middleware/checkFieldsPresent");

async function updateUser(req, res) {
  const id = Number(req.params.id);
  const { name, email, role } = req.body;

  try {
    await validateUserExists(id);

    let updateData = {};

    if (name) {
      validateName(name);
      updateData.name = name;
    }

    if (email) {
      await validateEmail(email);
      updateData.email = email;
    }

    if (role) {
      validateRole(role);
      updateData.role = role;
    }

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

module.exports = [checkFieldsPresent(["name", "email", "role"], 1), updateUser];
