const usersTable = `
CREATE TABLE Users (
    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
  full_name VARCHAR(100) NOT NULL,
  email_address VARCHAR(320) NOT NULL,
  username VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL,
  recovery_id INTEGER NOT NULL,
  recovery_answer VARCHAR(100) NOT NULL,
  FOREIGN KEY (recovery_id) REFERENCES Recovery_Questions(recovery_id)
    );
`
module.exports = { usersTable };