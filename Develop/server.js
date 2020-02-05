const express = require("express");
// const path = require("path");
const fs = require("fs");

// creating a server
const app = express();
const PORT = 8080;

// Sets up the Express app to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//routing
require("./routes/apiroutes")(app);
require("./routes/htmlroutes")(app);

// Starts our server
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
