const getInstructionBy =`
Select Instruction.instruction_id, Instruction.tutorial_title, Instruction.step_id, Instruction.step_id
From Instruction
WHERE tutorial_title = ?;
`
module.exports = { getInstructionBy };