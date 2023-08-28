const User = require("../../models/User");
const { validateName, validateEmail, validateRole } = require("../../validators/userValidator");

async function createUser(req, res) {
  const { name, email, role } = req.body;

  const nameValidation = validateName(name);
  const emailValidation = await validateEmail(email);
  const roleValidation = validateRole(role);

  if (!nameValidation.isValid) {
    return res.status(400).json({
      status: "fail",
      message: nameValidation.message,
    });
  }

  if (!emailValidation.isValid) {
    return res.status(400).json({
      status: "fail",
      message: emailValidation.message,
    });
  }

  if (!roleValidation.isValid) {
    return res.status(400).json({
      status: "fail",
      message: roleValidation.message,
    });
  }

  try {
    const newUser = await User.create({
      name,
      email,
      role,
    });

    res.status(201).json({
      status: "success",
      message: "User created successfully!",
      data: {
        user: newUser,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
}

module.exports = createUser;
