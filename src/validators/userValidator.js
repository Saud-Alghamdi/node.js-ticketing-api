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
const roleRegex = /^(user|admin|guest)$/;

function validateName(name) {
  if (!nameRegex.test(name)) {
    return {
      isValid: false,
      message: "Name must be between 3 and 20 characters and contain only letters.",
    };
  }

  return { isValid: true };
}

async function validateEmail(email) {
  if (!emailRegex.test(email)) {
    return {
      isValid: false,
      message: "Incorrect Email format.",
    };
  }

  // Check if email already exists
  const user = await User.findOne({ where: { email: email } });

  if (user) {
    return {
      isValid: false,
      message: "Email already exists.",
    };
  }

  return { isValid: true };
}

function validateRole(role) {
  if (!roleRegex.test(role)) {
    return {
      isValid: false,
      message: "Role must be either user, admin, or guest.",
    };
  }

  return { isValid: true };
}

module.exports = {
  validateName,
  validateEmail,
  validateRole,
};
