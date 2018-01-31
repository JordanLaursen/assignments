


var lyrics = ["This", "hit", "that", "ice", "cold",
              "Michelle", "Pfeiffer", "that", "white",
              "gold", "This", "one", "for", "them",
              "hood", "girls", "Them", "good", "girls",
              "straight", "masterpieces", "Stylin'",
              "whilen'", "livin'", "it", "up", "in",
              "the", "city", "Got", "Chucks", "on",
              "with", "Saint", "Laurent", "Gotta", "kiss",
              "myself", "I'm", "so", "pretty"];

var everyOtherLyrics = [];

function forwards() {
        console.log(lyrics.join(" "));
}

forwards();

function backwards() {
    lyrics.reverse();
    console.log(lyrics.join(" "));
}

backwards();

function everyOther() {
    for(var i = 0; i < lyrics.length; i += 2) {
        everyOtherLyrics.push(lyrics[i]);
    }
    everyOtherLyrics.reverse();
    console.log(everyOtherLyrics.join(" "));
}

everyOther();
