const recoveryTable = `
CREATE TABLE Recovery_Questions (
    recovery_id INTEGER PRIMARY KEY AUTOINCREMENT,
    question TEXT NOT NULL
    );
`
module.exports = { recoveryTable };