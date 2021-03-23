const getInstructionBy =`
Select *
From Instruction
WHERE tutorial_title = ?;
`
module.exports = { getInstructionBy };