const insertInstruction = `
INSERT INTO Instruction(tutorial_title,step_id,step_title,step_info,photo_address)
VALUES ('Lasagne',2,'Cut Onions','Use knife to cut onions','https://public-assets-fuzzballslam.s3.eu-west-2.amazonaws.com/assets/SlamBackground920x690.png'),
('Lasagne',1,'Boil Water','Add Water To Pan','https://public-assets-fuzzballslam.s3.eu-west-2.amazonaws.com/assets/SlamBackground920x690.png'),
('Python','1','Learn To Program Python','print hello world','https://public-assets-fuzzballslam.s3.eu-west-2.amazonaws.com/assets/SlamBackground920x690.png');
`;
module.exports = { insertInstruction };

