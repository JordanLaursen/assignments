const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    gamertag: {
        type: String,
        required: true,
        tolowercase: true,
        unique: true
    },
    games: [{
        type: Schema.Types.ObjectId,
        ref: "Game"
    }],
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("User", userSchema);
