const express = require("express");
const bodyParser = require("body-parser");
const bountyRoutes = require("./bounties");
const app = express();

app.use(bodyParser.json());
app.use("/bounties", bountyRoutes);

app.listen(4000, () => {
    console.log("We've got er workin");
});
