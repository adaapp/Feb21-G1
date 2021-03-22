const sqlite3 = require('sqlite3').verbose();
let { addInstruction } = require('./sql/addInstruction');
let { addTutorial } = require('./sql/addTutorial');
let { getALLInstruction } = require('./sql/GetAllInstruction');
let { getInstructionBy } = require('./sql/getinstructionbytutorial');
let { getAllTutorial } = require('./sql/getAllTutorial');
// Task D13
function getInstruction(db, req, res) {
    db.all(getALLInstruction, (err, rows) => {
        if (err) {
            console.error(err.message);
        }
        if (!rows) {
            res.send({ error: "no users found" })
        }
        res.send(rows);
    })
}

function getInstructionByID (db, req, res, searchID) {
    db.all(getInstructionBy,[searchID], (err, rows) => {
        if (err) {
            console.error(err.message);
        }
        if (!rows) {
            res.send({ error: "no users found" })
        }
        res.send(rows);
    })
}
function gettingAllTutorial(db, req, res) {
    db.all(getAllTutorial, (err, rows) => {
        if (err) {
            console.error(err.message);
        }
        if (!rows) {
            res.send({ error: "no users found" })
        }
        res.send(rows);
    })
}

function addingInstructions(db, req, res) {
    const { tutorial_title, step_id, step_title,step_info, photo_address } = req.body;
    db.run(addInstruction, [tutorial_title, step_id, step_title,step_info, photo_address],
      function(err) {
        if (err) {
          return console.log(err.message)
    }
        console.log(`${username} added to user field at position ${this.lastID}`)
        userID = this.lastID
        console.log("created new user " + userID);
        res.send({"ok":"ok"});
    })
}

function addingTutorials(db, req, res) {
    const { tutorial_title, category_name,tutorial_description, tutorial_photo_address } = req.body;
    db.run(addTutorial, [tutorial_title, category_name,tutorial_description, tutorial_photo_address],
      function(err) {
        if (err) {
          return console.log(err.message)
    }

        console.log("created new tutorial " + tutorial_title);
        res.send({"ok":"ok"});
    })
}





module.exports = { getInstruction, getInstructionByID, 
addingTutorials, addingInstructions, gettingAllTutorial }