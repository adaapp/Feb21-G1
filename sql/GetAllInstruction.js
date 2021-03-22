const getALLInstruction = `
Select Instruction.instruction_id, Instruction.tutorial_title, Instruction.step_id, Instruction.step_id
From Instruction;
`;
module.exports = { getALLInstruction };