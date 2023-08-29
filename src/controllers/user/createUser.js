const User = require("../../models/User");
const { validateName, validateEmail, validateRole } = require("../../validators/userValidator");

async function createUser(req, res) {
  const { name, email, role } = req.body;

  try {
    validateName(name);
    await validateEmail(email);
    validateRole(role);

    const newUser = await User.create({
      name,
      email,
      role,
    });

    res.status(201).json({
      isSuccess: true,
      message: "User created successfully!",
      data: {
        user: newUser,
      },
    });
  } catch (error) {
    res.status(400).json({
      isSuccess: false,
      message: error.message,
    });
  }
}

module.exports = createUser;
