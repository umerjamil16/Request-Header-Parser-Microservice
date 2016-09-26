var express = require("express");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3000;
var bodyParser = require("body-parser");

require("./routes/routes.js")(express, app);

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());

app.listen(PORT, function() {
    console.log("Server running on: " + PORT + "!");
});