const express = require("express");
const bountyRoutes = express.Router();
const uuid = require("uuid/v1");

const bounties = [
    {
        firstName: "Luke",
        lastName: "Skywalker",
        living: true,
        amount: 10000,
        type: "Jedi",
        id: "b96729e0-2264-11e8-bca6-73e60c1c4e46"
    },
    {
        firstName: "Chew",
        lastName: "Baca",
        living: true,
        amount: 2000,
        type: "Jedi",
        id: "b96729e1-2264-11e8-bca6-73e60c1c4e46"
    },
    {
        firstName: "Han",
        lastName: "Solo",
        living: true,
        amount: 50000,
        type: "Jedi",
        id: "b96729e2-2264-11e8-bca6-73e60c1c4e46"
    },
    {
        firstName: "Darth",
        lastName: "Vader",
        living: true,
        amount: 20000,
        type: "Sith",
        id: "b96729e3-2264-11e8-bca6-73e60c1c4e46"
    },
]

bountyRoutes.get("/", (req, res) => {
    res.send(bounties);
});

bountyRoutes.post("/", (req, res) => {
    req.body.id = uuid();
    bounties.push(req.body);
    res.send(req.body);
});

bountyRoutes.delete("/:id", (req, res) => {
    const foundBounty = bounties.find(bounty => bounty.id === req.params.id)
    bounties.splice(bounties.indexOf(foundBounty));
    res.send(bounties);
})

bountyRoutes.put("/:id", (req, res) => {
    const foundBounty = bounties.find(bounty => bounty.id === req.params.id)
    for(let key in req.body) {
        foundBounty[key] = req.body[key];
    }
    return res.send(req.body);
})

module.exports = bountyRoutes;
