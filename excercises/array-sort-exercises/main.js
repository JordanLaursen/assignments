



var numbers = [1, 3, 5, 2, 90, 20];

var putInOrder = numbers.sort(function(a, b) {
    return a - b;
});
console.log(putInOrder);

var highestToLowest = numbers.sort(function(a, b) {
    return a < b;
});
console.log(highestToLowest);


var wordsToSort = ["dog", "wolf", "by", "family", "eaten"];

var shortestToLongest = wordsToSort.sort(function(a, b) {
    return a.length - b.length;
});
console.log(wordsToSort);

var alphabetically = wordsToSort.sort();
console.log(alphabetically);


var peopleToSort = [
    {
        name: "Quiet Samurai",
        age: 22
    },
    {
        name: "Arrogant Ambassador",
        age: 100
    },
    {
        name: "Misunderstood Observer",
        age: 2
    },
    {
        name: "Unlucky Swami",
        age: 77
    }
];

var byAge = peopleToSort.sort(function(a, b) {
    return a.age - b.age;
});
console.log(byAge);
