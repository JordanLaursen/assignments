const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const weaponOptions = ["Green Shell", 'Red Shell', "Blue Shell", "Banana", "Triple Green Shell", "Star", "Bullet"]

const characterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    coolness: {
        type: Number,
        min: 1,
        max: 10
    },
    isGoodGuy: Boolean,
    favoriteWeapons: [{
        type: String,
        enum: weaponOptions,
    }],
    address: {
        street: String,
        city: String,
        state: {
            type: String,
            minlength: 2,
            maxlength: 2
        },
        zip: String
    }

});

module.exports = mongoose.model("Character", characterSchema);
