const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const levelSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ["Battle Mode", "Grand Prix", "Versus"]
    },
})
