const addInstruction = `
INSERT INTO Instruction(tutorial_title,step_id,step_title,step_info,photo_address)
VALUES (?,?,?,?,?);
`;

module.exports = { addInstruction };