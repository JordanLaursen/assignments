const express = require("express");
const app = express();
const port = process.env.PORT || 7000;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");

app.use(bodyParser.json());
app.use(morgan("dev"));

mongoose.connect("mongodb://localhost/mario-kart", (err) => {
    if(err) throw err;
    console.log("Connected to the database");
});

app.use("/characters", require("./routes/character"));

app.listen(port, () => {
    console.log(`We've got er runnin on port ${port}`);
});
