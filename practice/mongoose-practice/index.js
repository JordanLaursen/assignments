const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/practice-doc');

const Schema = mongoose.Schema;

const petSchema = new Schema({
    name: String,
    furColor: String,
    weight: Number,
    toys: [String],
    breed: {
        type: String,
        required: true
    }
});

const Pet = mongoose.model("Pet", petSchema);

const myPet = new Pet({
    name: "Harold",
    furColor: "Hairless",
    weight: 420,
    toys: ["ball", "frisbee"],
    breed: "Chihuahua"
});

const myPet2 = new Pet({
    name: "Barny",
    furColor: "Purple",
    weight: 420,
    toys: ["ball", "doll"],
    breed: "Dinosaur"
});

const myPet3 = new Pet({
    name: "Carol",
    furColor: "Black",
    weight: 420,
    toys: ["tennis ball", "frisbee"],
    breed: "Black Lab"
});

const myPet4 = new Pet({
    name: "Steve",
    furColor: "Black",
    weight: 340,
    toys: ["Shoe"],
    breed: "Black Lab"
});

myPet.save((err, new_pet) => {
});

myPet2.save((err, new_pet) => {
});

myPet3.save((err, new_pet) => {
});

myPet4.save((err, new_pet) => {
});

Pet.findOne({name: "Steve"}, (err, pet) => {
    pet.remove(err => {
        console.log("Steve swallowed an entire salami and died");
    })
});
