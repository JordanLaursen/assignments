const express = require("express");
const bodyParser = require("body-parser");
const uuid = require("uuid/v1");

const app = express();
app.use(bodyParser.json());

const movies = [
    {id: "4a32c0f0-2248-11e8-ab85-870153100df1", title: "Harry and the Hendersons"},
    {id: "4a32c0f1-2248-11e8-ab85-870153100df1", title: "Sharkboy and lavagirl"},
    {id: "4a32c0f2-2248-11e8-ab85-870153100df1", title: "Finding Nemo"},
    {id: "4a32c0f3-2248-11e8-ab85-870153100df1", title: "The Incredibles 2"},
]

app.get("/movies", (req, res) => {
    res.send(movies);
});

app.get("/movies/:id", (req, res) => {
    const foundMovie = movies.find(movie => movie.id === req.params.id);
    res.send(foundMovie);
});

app.put("/movies/:id", (req, res) => {
    const foundMovie = movies.find(movie => movie.id === req.params.id);
    for(let key in req.body) {
        foundMovie[key] = req.body[key]
    }
    return res.send(req.body);
});

app.delete("/movies/:id", (req, res) => {
    const foundMovie = movies.find(movie => movie.id === req.params.id);
    movies.splice(movies.indexOf(foundMovie));
    res.send(movies);
})

app.post("/movies", (req, res) => {
    req.body.id = uuid();
    movies.push(req.body);
    res.send(req.body);
});

app.listen(9000, () => {
    console.log("its online maine")
});
