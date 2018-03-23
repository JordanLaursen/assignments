const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    gamertag: {
        type: String,
        required: true,
        uppercase: true,
        unique: true
    },
    games: [{
        type: String,
        required: true
    }],
    console: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("User", userSchema);
