function checkFieldsPresent(requiredFields, minRequired = requiredFields.length) {
  return function (req, res, next) {
    let count = 0;
    for (const field of requiredFields) {
      if (req.body[field]) {
        count += 1;
      }
    }
    if (count < minRequired) {
      return res.status(400).json({ isSuccess: false, message: `At least ${minRequired} of the following fields are required: ${requiredFields.join(", ")}` });
    }
    next();
  };
}

module.exports = checkFieldsPresent;
