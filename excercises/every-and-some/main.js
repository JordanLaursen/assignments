



function every(arr, callback){
    let bool;
    for(let i = 0; i < arr.length; i++) {
        if(typeof arr[i] === callback) {
            bool = true;
        } else {
            return bool = false;
        }
    }
    return bool;
}

function some(arr, callback){
    let bool;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== callback) {
            bool = false;
        } else {
            return bool = true;
        }
    }
    return bool;
}

// function some(arr callback){
//
// }


console.log(every([1,2,"3",4,5,6], "number"));
console.log(some(["this", "that", "than"], "than"))
