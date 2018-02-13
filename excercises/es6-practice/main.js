const name = 'John'
let age = 101
const pets = ["cat", "dog"]

const petObjects = []

for (let i = 0; i < pets.length; i++) {
    const pet = {
        type: pets[i]
    }
    let name;
    if (pets[i] === "cat") {
        name = "fluffy"
    } else {
        name = "spot"
    }
    pet.name = name
    petObjects.push(pet)
}

console.log(petObjects);


// *********************************************************

carrots = []
const vegetables = carrots.map(carrot => {
    return {
        type: "carrot",
        name: carrot
    };
});
// console.log(vegetables("gerry"));

// const vegetables = carrots.map(function(carrot){
//     return {type: "carrot", name: carrot}
// });
console.log(vegetables);


// const friends = people.filter(function(person){
//     return !!person.friendly
// })

const people = [];

const friends = people.filter(person => !!person.friendly);

console.log(friends);




const doMathSum = (a, b) => a + b;


const produceProduct = (a, b) => a * b;

const me = (first = "Jane", last = "Doe", age = 100) => `Hi ${first} ${last}, How does it feel to be ${age}?`;

console.log(me());

const animals = [
    {
        type: "dog",
        name: "henry"
    },
    {
        type: "cat",
        name: "kitty"
    }
]

const dogs = animals.filter(animal => animal.type === "dog")
console.log(dogs)



const welcomeMessage = (location = "Hawaii", name = "Janice") => `
Hi ${name}!

Welcome to ${location}

I hope you enjoy your stay.
Please ask the president of Hawaii if you need anything.
`

console.log(welcomeMessage());
