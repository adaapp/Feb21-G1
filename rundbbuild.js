const sqlite3 = require('sqlite3').verbose();
let { categoryTable } = require('./sql/category');
let { tutorialTable } = require('./sql/createtutorial');
let { instructionTable } = require('./sql/createinstruction');
let { insertCategory } = require('./sql/insertcategory');
let { insertTutorial } = require('./sql/inserttutorial');
let { insertInstruction } = require('./sql/insertinstruction');
let { recoveryTable } = require('./sql/createrecovery');
let { usersTable } = require('./sql/createusers');
let { ratingsTable } = require('./sql/createratings');
let { insertUsers } = require('./sql/insertusers');
let { insertRecovery } = require('./sql/insertrecovery');
let { insertRatings } = require('./sql/insertratings');

function connect() {
  let db = new sqlite3.Database('./db/mydb.sqlite', (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the SQlite database.');
  });
  db.exec('PRAGMA foreign_keys = ON;', function(error)  {
    if (error){
        console.error("Pragma statement didn't work.")
    } else {
        console.log("Foreign Key Enforcement is on.")
    }
  });
  return db;
}

function init(db) {


  db.serialize(() => {
      db.run(categoryTable, (err) => {
        if (err) { console.log(err) } else { console.log("Creating table Category") }
      });
      db.run(tutorialTable, (err) => {
        if (err) { console.log(err) } else { console.log("Creating Tutorial") }
      });
      db.run(instructionTable, (err) => {
        if (err) { console.log(err) } else { console.log("Create Instruction") }
      });
      db.run(insertCategory, (err) => {
        if (err) { console.log(err) } else { console.log("insertCategory") }
      });
      db.run(insertTutorial, (err) => {
        if (err) { console.log(err) } else { console.log("Inserting Tutorial") }
      });
      db.run(insertInstruction, (err) => {
        if (err) { console.log(err) } else { console.log("Inserting Instruction") }
      });
      db.run(recoveryTable, (err) => {
        if (err) { console.log(err) } else { console.log("Create Recovery") }
      });
      db.run(usersTable, (err) => {
        if (err) { console.log(err) } else { console.log("Create Users") }
      });
      db.run(ratingsTable, (err) => {
        if (err) { console.log(err) } else { console.log("Create Ratings") }
      });
      db.run(insertRecovery, (err) => {
        if (err) { console.log(err) } else { console.log("Inserting Recovery") }
      });
      db.run(insertUsers, (err) => {
        if (err) { console.log(err) } else { console.log("Inserting Users") }
      });
      db.run(insertRatings, (err) => {
        if (err) { console.log(err) } else { console.log("Inserting Ratings") }
      });
      


  });
}

module.exports = { connect, init }