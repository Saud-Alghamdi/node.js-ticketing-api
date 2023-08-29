/*
* Title:
--> Can't not be empty
--> Max length is 75 characters
* Description:
--> Can't be be empty
--> Max length is 1000 characters
*/
const TITLE_MAX_CHAR = 75;
const DESCRIPTION_MAX_CHAR = 1000;

function validateTitle(title) {
  if (!title) {
    throw new Error("Title is required");
  }
  if (title.length > TITLE_MAX_CHAR) {
    throw new Error("Title should not exceed 75 characters");
  }
}

function validateDescription(description) {
  if (!description) {
    throw new Error("Description is required");
  }
  if (description.length > DESCRIPTION_MAX_CHAR) {
    throw new Error("Description should not exceed 1000 characters");
  }
}

module.exports = {
  validateTitle,
  validateDescription,
};
