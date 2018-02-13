//
// const names = ["Pennywise", "Clowny", "Macy", "Porky"];
//
// const randName = () => {
//     const whichOne = Math.floor(Math.random() * names.length);
//     return names[whichOne];
// }
//
// const whatSize = () => {
//     const whatSize = Math.floor(Math.random() * 5 + 10);
//     return whatSize;
// }
// class Clown {
//     constructor(name, shoeSize, isScary) {
//         this.name = randName();
//         this.shoeSize = whatSize();
//         this.isScary = isScary;
//     }
// }
// // function Clown(name, shoeSize, isScary){
// //     this.name = randName();
// //     this.shoeSize = whatSize();
// //     this.isScary = isScary;
// // }
//
// const thisClown = new Clown("Pennywise", 13, true);
//
// console.log(thisClown);

//
// class HangmanGame {
//     constructor(word, guessesUntilLose) {
//         this.word = word;
//         this.guessesUntilLose = guessesUntilLose;
//     }
// }
// HangmanGame.prototype.wrongGuess = function() {
//     this.guessesUntilLose--;
// }
//
// const thisGame = new HangmanGame("anthropologyst", 10);
//
// console.log(thisGame);






class Media {
    constructor(title, duration) {
        this.title = title;
        this.duration = duration;
        this.isPlaying = false;

    }
}

Media.prototype.play = () => this.isPlaying = true;
Media.prototype.stop = () => this.isPlaying = false;


class Song extends Media{
    constructor(title, duration, artist) {
        super(title, duration);
        this.artist = artist;
    }
}

Song.prototype = Object.create(Media.prototype);
Song.prototype.constructor = Song;


// function Song(title, duration, artist) {
//     Media.call(title, duration);
//     this.artist = artist;
// }
