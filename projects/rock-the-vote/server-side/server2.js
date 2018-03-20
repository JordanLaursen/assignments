const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");

app.use(bodyParser.json());
app.use(morgan("dev"))

app.connect()

app.listen(8001, () => {
    console.log("Hello");
})
