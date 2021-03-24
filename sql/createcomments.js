const commentsTable = `
CREATE TABLE Comments (
    comment_id INTEGER PRIMARY KEY AUTOINCREMENT,
    tutorial_title VARCHAR(50) NOT NULL,
    user_id INTEGER NOT NULL,
    comments TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (tutorial_title) REFERENCES Tutorial(tutorial_title)
    );
`
module.exports = { commentsTable };