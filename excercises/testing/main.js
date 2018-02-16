



const firstLastOverAge = (arr, theAge) => {
    return arr
    .filter(person => person.age > theAge)
    .map(person => `${person.firstName} ${person.lastName}`);
}
const difference = num => num.reduce((a, b) => a - b);

const functions = {
    firstLastOverAge,
    difference
};



module.exports = functions;
