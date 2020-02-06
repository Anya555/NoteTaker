const fs = require("fs");
const Store = require("../db/Store");
const path = require("path");
const db = require("../db/db.json");

module.exports = function(app) {
  // reads the db.json file and returns all saved notes as JSON
  app.get("/api/notes", function(req, res) {
    res.json(db);
  });

  app.delete("/api/notes/:id", function(req, res) {
    let storeObj = db;
      console.log(storeObj);
      
  // accessing URL parameters
    let noteId = req.params.id;

    let filteredDB = storeObj.filter(filteredNote => {
      return filteredNote.id != noteId;
    });

    fs.writeFile("./db/db.json", JSON.stringify(filteredDB), function(err) {
      if(err) throw err;
      // console.log(filteredDB);
      // res.json(filteredDB); 
    });

    // We need to have the route localhost:8080//notes
    res.json(filteredDB); 

  });

  //Should receive a new note to save on the request body, add it to the db.json file,
  // and then return the new note to the client.
  app.post("/api/notes", function(req, res) {
  
    let storeObj = db;

  // making new note as an object so I can add it to an array in db.json file and display in browser
    let nextNote = new Store(req.body.title, req.body.text);
    storeObj.push(nextNote);

    fs.writeFile("./db/db.json", JSON.stringify(storeObj), function(err){
      res.json(storeObj);
    });
  });

}
