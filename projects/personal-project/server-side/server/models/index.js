const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    console: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Game", gameSchema);
