const express = require("express");
const characterRoutes = express.Router();
const Character = require("../models/character");

characterRoutes.get("/", (req, res) => {
    const query = {};
    if(req.query.isGoodGuy) {
        query.isGoodGuy = req.query.isGoodGuy
    };

    Character.find(query, (err, characters) => {
        if(err) return res.status(500).send(err);
        return res.send(characters);
    });
});

characterRoutes.get("/:id", (req, res) => {
    Character.findById(req.params.id, (err, character) => {
        if (err) return res.status(500).send(err);
        return res.send(character);
    });
});

characterRoutes.post("/", (req, res) => {
    const newCharacter = new Character(req.body);
    newCharacter.save(err => {
        if (err) return res.status(500).send(err);
        return res.status(201).send(newCharacter);
    });
});

characterRoutes.put("/:id", (req, res) => {
    character.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedCharacter) => {
        if (err) return res.status(500).send(err);
        res.send(updatedCharacter);
    });
});

characterRoutes.delete("/:id", (req, res) => {
    character.findByIdAndRemove(req.params.id, (err, removedCharacter) => {
        if (err) return res.status(500).send(err);
        return res.status(202).send(removedCharacter);
    });
});


module.exports = characterRoutes;
