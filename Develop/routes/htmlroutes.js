app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"))
});

// making a route to index.html file
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});
