/*
* Title:
--> Can't not be empty
--> Max length is 75 characters
* Description:
--> Can't be be empty
--> Max length is 1000 characters
*/

function validateTitle(title) {
  if (!title) {
    throw new Error("Title is required");
  }
  if (title.length > 75) {
    throw new Error("Title should not exceed 75 characters");
  }
}

function validateDescription(description) {
  if (!description) {
    throw new Error("Description is required");
  }
  if (description.length > 1000) {
    throw new Error("Description should not exceed 1000 characters");
  }
}

module.exports = {
  validateTitle,
  validateDescription,
};
