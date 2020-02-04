const express = require("express");
const path = require("path");
const fs = require("fs");

// creating a server
const app = express();
const PORT = 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes



// making a route to notes.html file
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"))
})

// making a route to index.html file
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

//reads the db.json file and returns all saved notes as JSON
app.get("api/notes", function(req, res){
    res.sendFile(path.join(__dirname, "./db/db.json"));
    console.log(res);
})


// Starts our server
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });

