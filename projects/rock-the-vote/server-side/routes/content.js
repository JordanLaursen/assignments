const express = require("express");
const contentRoutes = express.Router();
const Article = require("../models/articles");

contentRoutes.get("/", (req, res) => {
    Article.find((err, articles) => {
        if (err) res.status(500);
        return res.send(articles)
    });
});

contentRoutes.get("/:id", (req, res) => {
    Article.findById(req.params.id, (err, article) => {
        if (err) return res.status(500).send(err);
        return res.send(article);
    });
});

contentRoutes.post("/", (req, res) => {
    const newArticle = new Article(req.body);
    newArticle.vote = 0;
    newArticle.save(err => {
        if (err) return res.status(500).send(err);
        return res.status(201).send(newArticle);
    });
});

contentRoutes.put("/:id", (req, res) => {
    Article.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedArticle) => {
        if (err) return res.status(500).send(err);
        res.send(updatedArticle);
    });
});

contentRoutes.delete("/:id", (req, res) => {
    Article.findByIdAndRemove(req.params.id, (err, removedArticle) => {
        if (err) return res.status(500).send(err);
        return res.status(202).send(removedArticle);
    });
});

module.exports = contentRoutes;
