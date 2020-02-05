const fs = require("fs");
const Store = require("../db/Store");
const path = require("path");
const db = require("../db/db.json");

let savedNotes = [];

module.exports = function(app) {
  // Should read the db.json file and return all saved notes as JSON
  app.get("/api/notes", function(req, res) {
    res.json(db);
  });

  app.post("/api/notes", function(req, res) {
    // res.sendFile(path.join(__dirname, "../db/db.json"));

    let storeObj = db;

    let nextNote = new Store(req.body.title, req.body.text);
    storeObj.push(nextNote);

    fs.writeFile("./db/db.json", JSON.stringify(storeObj), function(err){
      res.json(storeObj);
    });
  });

};
