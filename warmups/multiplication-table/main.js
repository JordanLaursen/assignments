
const thing = [];


const multTable = (num) => {
    for (let i = 0; i <= num; i++) {
        thing[i] = [];
        for (let j = 0; j < num; j++) {
            thing[i][j] == (i * j);
            // console.log(thing);
        }
    }
}

multTable(5);

console.log(thing);
