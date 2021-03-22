const tutorialTable = `
CREATE TABLE Tutorial (
  tutorial_title VARCHAR(50) PRIMARY KEY NOT NULL,
  category_name VARCHAR(30) NOT NULL,
  Tutorial_Description INT(8) NOT NULL,
  tutorial_photo_address VARCHAR(500),
  FOREIGN KEY(category_name) REFERENCES Category(category_name)
);
`;

module.exports = { tutorialTable };