/*
* Name:
--> Must contain between 3 to 20 letters
--> Can only accept letters
* Email:
--> Must be valid email address
--> Must no already exist
* Role:
--> Must be either (user, admin, superadmin)
*/
const User = require("../models/User");

const nameRegex = /^[A-Za-z]{3,20}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const roleRegex = /^(user|admin|superadmin)$/;

function validateName(name) {
  if (!nameRegex.test(name)) {
    throw new Error("Name must be between 3 and 20 characters and contain only letters.");
  }
}

async function validateEmail(email) {
  if (!emailRegex.test(email)) {
    throw new Error("Incorrect Email format.");
  }

  // Check if email already exists
  const user = await User.findOne({ where: { email: email } });

  if (user) {
    throw new Error("Email already exists.");
  }
}

function validateRole(role) {
  if (!roleRegex.test(role)) {
    throw new Error("Role must be either user, admin, or superadmin.");
  }
}

async function validateUserExists(id) {
  const user = await User.findOne({ where: { id: id } });

  if (!user) {
    throw new Error("User does not exist.");
  }
}

module.exports = {
  validateName,
  validateEmail,
  validateRole,
  validateUserExists,
};
