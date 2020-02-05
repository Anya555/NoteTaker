const express = require("express");
const path = require("path");
const fs = require("fs");

// creating a server
const app = express();
const PORT =  8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// making class Store to handle reading and writing data 
class Store {
    constructor(title, text) {
        this.title = title,
            this.text = text
    }
}

// Routes

// making a route to notes.html file
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"))
})

let  savedNotes = [];
// making a route to db.json file
app.get("/api/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "/db/db.json"));

   // Should read the db.json file and return all saved notes as JSON.
 
    fs.readFileSync("./db/db.json", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }
        console.log(data);
        return res.json(savedNotes);
    });
});

app.post("/api/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "/db/db.json"));

    // Should receive a new note to save on the request body, add it to the db.json file,
    // and then return the new note to the client.  

    let nextNote = new Store(req.body.title, req.body.text);
    savedNotes.push(nextNote);

    fs.writeFileSync("./db/db.json",  function (error, data) {
        if (error) {
            return console.log(error);
        }
        
        return res.json(savedNotes);
    });

 // When the request has ended...
req.on("end", function() {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(myHTML);
  });
});




// making a route to index.html file
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});





// Starts our server
app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});

