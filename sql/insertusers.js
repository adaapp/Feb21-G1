const insertUsers = `
INSERT INTO Users(full_name,email_address,username,password,recovery_id,recovery_answer)
VALUES ('Jacob Lamb','jacob.lamb@ada.ac.uk','jlamb99','Murphy',1,'dog name');
`;
module.exports = { insertUsers };