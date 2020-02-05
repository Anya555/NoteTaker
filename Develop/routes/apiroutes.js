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
    res.sendFile(path.join(__dirname, "/db/db.json"));

    let nextNote = new Store(req.body.title, req.body.text);
    savedNotes.push(nextNote);

    fs.writeFileSync("./db/db.json", function(error, data) {
      if (error) {
        return console.log(error);
      }

      return res.json(savedNotes);
    });
  });
};
