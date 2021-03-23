const categoryTable = `
CREATE TABLE Category (
  category_name VARCHAR(50)  PRIMARY KEY NOT NULL,
  category_description VARCHAR(200) NOT NULL
);
`;

module.exports = { categoryTable };