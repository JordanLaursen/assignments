const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    article: {
        type: String,
        required: true,
    },
    vote: Number,
    comments: [String]
});

module.exports = mongoose.model("Article", articleSchema);
