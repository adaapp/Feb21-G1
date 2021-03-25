var express = require('express');
var app = express();
const dba = require("./rundbbuild.js");
const query = require("./dbqueries.js");
let db = dba.connect();

app.use(express.json());

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile("public/create-tutorial.html", { root: __dirname })
});
app.get('/category-tutorial', function(req, res) {
    res.sendFile("public/category-tutorial.html", { root: __dirname })
});
app.get('/home', function(req, res) {
    res.sendFile("public/home.html", { root: __dirname })
});
app.get('/view-tutorial', function(req, res) {
    res.sendFile("public/view-tutorial.html", { root: __dirname })
});
app.get('/api/get-all-instructions', function(req, res) {
    query.getInstruction(db,req,res)
});
app.get('/api/get-all-tutorials', function(req, res) {
    query.gettingAllTutorial(db,req,res)
});
app.get('/api/get-by-id/:id', function(req, res) {
    var searchId = req.params.id
    query.getInstructionByID(db,req,res,searchId)
});
app.post('/api/add-tutorial', function(req,res) {
    console.log("This is the req",req.body);
    query.addingTutorials(db,req,res);
});
app.post('/api/add-tutorial-step', function(req,res) {
  console.log("This is the req",req.body);
  query.addingInstructions(db,req,res);
});

app.listen(3000, function () {

    dba.init(db);
    console.log('Server is listening on port 3000. Ready to accept requests!');
});