

var numbers = [3, 6, 8, 2]; /// [6, 8]

var isGreater = numbers.filter(function(number) {
    return number > 5;
});

console.log(isGreater);

var isEven = numbers.filter(function(number) {
    return (number % 2) === 0;
});

console.log(isEven);

var words = ["dog", "wolf", "by", "family", "eaten", "camping"];

var lessThanFiveChars = words.filter(function(word) {
    return word.length < 6;
});
console.log(lessThanFiveChars);

var peopleWhoBelongToTheIlluminati = [
  {
    name: "Angelina Jolie",
    member: true
  },{
    name: "Eric Jones",
    member: false
  },{
    name: "Paris Hilton",
    member: true
  },{
    name: "Kayne West",
    member: false
  },{
    name: "Bob Ziroll",
    member: true
  }
];

var isInClub = peopleWhoBelongToTheIlluminati.filter(function(person) {
    return person.member === true;
});
console.log(isInClub);

var peopleOfAge = [
  {
    name: "Angelina Jolie",
    age: 80
  },{
    name: "Eric Jones",
    age: 2
  },{
    name: "Paris Hilton",
    age: 5
  },{
    name: "Kayne West",
    age: 16
  },{
    name: "Bob Ziroll",
    age: 100
  }
];

var isOfAge = peopleOfAge.filter(function(person) {
    return person.age > 17;
});
console.log(isOfAge);
