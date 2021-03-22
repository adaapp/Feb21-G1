const addTutorial = `
INSERT INTO Tutorial(tutorial_title,category_name,tutorial_description,tutorial_photo_address)
VALUES (?,?,?,?);
`
module.exports = { addTutorial };