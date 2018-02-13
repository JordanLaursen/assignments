var ask = require("readline-sync");
//
// var words = [];
// var newWord;
// function createWords() {
//     var newWord = readline.question("Add a new word to your dictionary: ");
//     newWord = newWord.toLowerCase();
//     if(words.indexOf(newWord) === -1) {
//         words.push(newWord);
//     } else if (newWord === "quit") {
//         console.log("goodbye");
//         return;
//     } else {
//         console.log("You have alreadly added this word");
//     }
// }
//
// while(words[words.length - 1] !== "quit") {
//     createWords();
//     console.log(words)
// }

var words = [];
var check = words.map(function(currWord) {
    return currWord.word;
});
function newWord() {
    return ask.question("Add a new word: ")
}

function newDefinition() {
    return ask.question("Add a new definition: ")
}

function createWords(word, definition) {
    this.word = newWord();
    this.definition = newDefinition();
    // words.push(this.word && this.definition);
    // console.log(words.word);
}

// var newestWord = new createWords();
var newWords = new createWords();
words.push(newWords);
console.log(check);

// while(newestWord.word !== "quit") {
//     words.push(newestWord)
// }




// while() {
//     createWords();
//     console.log(words.word);
// }
