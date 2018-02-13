var numbersToChange = [2, 5, 100];

var doubled = numbersToChange.map(function(number) {
    return number * 2;
});
console.log(doubled);

var toStrings = numbersToChange.map(function(number) {
    return number.toString();
});
console.log(toStrings);

var names = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
];

var onlyName = names.map(function(person) {
    return person.name;
});
console.log(onlyName);

var seeMovie = names.map(function(person) {
    if(person.age < 18) {
        return person.name + " is not old enough!!";
    } else {
        return person.name + " can go see the Matrix.";
    }
});
console.log(seeMovie);

var makeList = names.map(function(person) {
    return "<h1>" + person.name + "</h1>" + "<h2>" + person.age + "</h2>";
})
console.log(makeList);
