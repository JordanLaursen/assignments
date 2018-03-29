const express = require("express");
const playerRoutes = express.Router();
const Game = require("./models/users");

playerRoutes.get("/", (req, res) => {
    Game.find((err, gamers) => {
        if (err) res.status(500);
        return res.send(gamers)
    });
});

playerRoutes.get("/:id", (req, res) => {
    Game.findById(req.params.id, (err, gamer) => {
        if (err) return res.status(500).send(err);
        return res.send(gamer);
    });
});

playerRoutes.post("/", (req, res) => {
    const newGame = new Game(req.body);
    newGame.vote = 0;
    newGame.save(err => {
        if (err) return res.status(500).send(err);
        return res.status(201).send(newGame);
    });
});

playerRoutes.put("/:id", (req, res) => {
    Game.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedGame) => {
        if (err) return res.status(500).send(err);
        res.send(updatedGame);
    });
});

playerRoutes.delete("/:id", (req, res) => {
    Game.findByIdAndRemove(req.params.id, (err, removedGame) => {
        if (err) return res.status(500).send(err);
        return res.status(202).send(removedGame);
    });
});

module.exports = playerRoutes;
