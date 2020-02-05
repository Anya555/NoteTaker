const fs = require("fs");
const store = require("../store");

const app = require("../server");

// Should read the db.json file and return all saved notes as JSON
app.get("/api/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "/db/db.json"));
});

let  savedNotes = [];

// Should receive a new note to save on the request body, add it to the db.json file,
    // and then return the new note to the client.  

app.post("/api/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "/db/db.json"));

    let nextNote = new Store(req.body.title, req.body.text);
    savedNotes.push(nextNote);

    fs.writeFileSync("./db/db.json",  function (error, data) {
        if (error) {
            return console.log(error);
        }
        
        return res.json(savedNotes);
    });


// because I'm getting content length mismatch error??
 // When the request has ended...
req.on("end", function() {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(myHTML);
  });
});