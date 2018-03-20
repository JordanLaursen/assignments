const express = require("express");
const uuid = require("uuid/v1");
const bodyParser = require("body-parser");
const app = express();
const movieRoutes = require("./routes/movies");
const gameRoutes = require("./routes/games");
app.use(bodyParser.json());
app.use("/movies", movieRoutes);
app.use("/games", gameRoutes);

app.listen(3939, () => {
    console.log("she's wurkin");
});
