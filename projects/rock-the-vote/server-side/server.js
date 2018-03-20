const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");


app.use(bodyParser.json());
app.use(morgan("dev"));

mongoose.connect("mongodb://localhost/rockTheVote", (err) => {
    if(err) throw err;
    console.log("Connected to the database");
});

app.use("/articles", require("./routes/content"));

app.listen(port, () => {
    console.log(`We've got er runnin on port ${port}`);
});
