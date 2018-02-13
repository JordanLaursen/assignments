var numbers = [1, 2, 3];

var sumOfNumbersArr = numbers.reduce(function(total, currentNum) {
    return total + currentNum;
}, 0);
console.log(sumOfNumbersArr);

var concatNumbers = numbers.reduce(function(total, currentChar) {
    return total.toString() + currentChar.toString();
});
console.log(concatNumbers);

//**********************************************************

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
    return arr.reduce(function(prev, curr) {
        if(curr.age >=18 && curr.age <=25 && curr.voted === true) {
            prev.youngVotes++;
        } else if(curr.age >=18 && curr.age <=25) {
            prev.youth++;
        } else if(curr.age >=26 && curr.age <=35 && curr.voted === true) {
            prev.midVotes++;
        } else if(curr.age >=26 && curr.age <=35) {
            prev.mid++;
        } else if(curr.age >=36 && curr.age <=55 && curr.voted === true) {
            prev.oldVotes++;
        } else {
            prev.olds++;
        }
        return prev;
    }, {youngVotes: 0, youth: 0, midVotes: 0, mid: 0, oldVotes: 0, olds: 0});
}

console.log(voterResults(voters));

function totalVotes(arr) {
    return arr.reduce(function(total, currentVoter) {
        if(currentVoter.voted === true) {
            total.voted++;
        } else {
            total.notVoted++;
        }
        return total;
    }, {voted: 0, notVoted: 0});
}
console.log(totalVotes(voters));

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

function shoppingSpree(arr) {
    return arr.reduce(function(total, currentItem) {
        return total + currentItem.price;
    }, 0);
}
console.log(shoppingSpree(wishlist));

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
]

function flatten(arr) {
    return arr.reduce(function(total, currentArrItem) {
        return total.concat(currentArrItem);
    });
}
console.log(flatten(arrays));
