const express = require("express");
const playerRoutes = express.Router();
const User = require("./index");

playerRoutes.get("/", (req, res) => {
    User.find((err, articles) => {
        if (err) res.status(500);
        return res.send(articles)
    });
});

playerRoutes.get("/:id", (req, res) => {
    User.findById(req.params.id, (err, article) => {
        if (err) return res.status(500).send(err);
        return res.send(article);
    });
});

playerRoutes.post("/", (req, res) => {
    const newUser = new User(req.body);
    newUser.vote = 0;
    newUser.save(err => {
        if (err) return res.status(500).send(err);
        return res.status(201).send(newUser);
    });
});

playerRoutes.put("/:id", (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedUser) => {
        if (err) return res.status(500).send(err);
        res.send(updatedUser);
    });
});

playerRoutes.delete("/:id", (req, res) => {
    User.findByIdAndRemove(req.params.id, (err, removedUser) => {
        if (err) return res.status(500).send(err);
        return res.status(202).send(removedUser);
    });
});

module.exports = playerRoutes;
