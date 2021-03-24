const ratingsTable = `
CREATE TABLE Ratings (
    tutorial_title VARCHAR(50) NOT NULL,
    user_id INTEGER NOT NULL,
    thumbs_up INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (tutorial_title) REFERENCES Tutorial(tutorial_title)
    PRIMARY KEY (tutorial_title, user_id)
    );
`
module.exports = { ratingsTable };