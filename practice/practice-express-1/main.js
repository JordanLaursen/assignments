const express = require("express");
const bodyParser = require("body-parser");
const uuid = require("uuid/v1");
const app = express();

app.use(bodyParser.json())

const sports = [
    {id: "8e1a4020-223b-11e8-b3cb-898ecdd2c315", name: "baseball"},
    {id: "8e1a4021-223b-11e8-b3cb-898ecdd2c315", name: "football"},
    {id: "8e1a4022-223b-11e8-b3cb-898ecdd2c315", name: "ping pong"},
    {id: "8e1a4023-223b-11e8-b3cb-898ecdd2c315", name: "tennis"}
]

app.get("/sports", (req, res) => {
    res.send(sports);
})

app.post("/sports", (req, res) => {
    req.body.id = uuid();
    sports.push(req.body);
    res.send(req.body);
})

app.listen(8000, () => {
    console.log("its finally working")
})
