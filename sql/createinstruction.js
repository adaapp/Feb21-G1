const instructionTable = `
CREATE TABLE Instruction (
  instruction_id INTEGER PRIMARY KEY AUTOINCREMENT,
  tutorial_title VARCHAR(50) NOT NULL,
  step_id INTEGER NOT NULL,
  step_title VARCHAR(50) NOT NULL,
  photo_address VARCHAR(500),
  step_info TEXT,
  FOREIGN KEY (tutorial_title) REFERENCES Tutorial(tutorial_title),
  UNIQUE(tutorial_title,step_id)
);
`;

module.exports = { instructionTable };