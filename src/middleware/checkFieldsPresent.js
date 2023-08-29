function checkFieldsPresent(requiredFields) {
  return function (req, res, next) {
    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res.status(400).json({ isSuccess: false, message: `${field} field is required` });
      }
    }
    next();
  };
}

module.exports = checkFieldsPresent;
