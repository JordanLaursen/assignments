


var userBase = {
    name: "Julie",
    likesGiven: ["Food", "Music", "Movies"],
    hobbies: ["Running", "Dieting"],
    friends: [
        {
            name: "Steve",
            likesGiven: ["Salad", "Car rides", "Drinking"],
            friendsOfFriend: [
                {
                    name: "Carol",
                    likesGiven: ["Dogs", "T.V.", "Walking"],
                    hobbies: ["Baseball", "Building model trains"],
                    age: 41
                }
            ],
            hobbies: ["Collecting bottle caps", "Playing video games"]
        },
        {
            name: "Donna",
            likesGiven: ["Beer", "Cards", "Bird watching"],
            friendsOfFriend: [
                {
                    name: "James",
                    likesGiven: ["Hunting", "Fishing", "Making Money"],
                    hobbies: ["Gaming", "Painting"]
                }
            ],
            hobbies: ["Swimming", "Playing Wii"]
        },
        {
            name: "Sam",
            likesGiven: ["Beer", "Going Mudding", "Bird hunting"],
            friendsOfFriend: [
                {
                    name: "Eric",
                    likesGiven: ["Hunting", "Fishing", "Drinking"],
                    hobbies: ["Walking on the beach", "Playing slots"]
                }
            ],
            hobbies: ["Gaming", "Playing pool"]
        },
        {
            name: "Elon",
            likesGiven: ["Beer", "Steak", "Watching Magnum P.I."],
            friendsOfFriend: [
                {
                    name: "Bob",
                    likesGiven: ["Hunting", "Fishing", "Drinking"],
                    hobbies: ["Gaming", "Playing Chess"]
                }
            ],
            hobbies: ["Gaming", "Playing Poker"]
        }
    ],
}


userBase.friends[1].friendsOfFriend[0].likesGiven.push("Tacos");
userBase.friends[1].friendsOfFriend[0].likesGiven.push("Power tools");
userBase.friends[1].friendsOfFriend[0].age = 19;
userBase.friends[2].friendsOfFriend[0].age = 41;
console.log(userBase.friends[1].friendsOfFriend[0].likesGiven);
console.log(userBase.friends[1].friendsOfFriend[0].age);
console.log(userBase.friends[2].friendsOfFriend[0].age);
