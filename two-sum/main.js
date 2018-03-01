function twoSum(arr, sum){
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if (arr[i] + arr[j] === sum && i !== j){
                return console.log(arr.indexOf(arr[i]) + ", " + arr.indexOf(arr[j]))
            } else if(arr[i] === arr.length - 1 && arr[j] === arr.length - 1){
                return console.log(`This set has no solution`)
            }
        }
    }
}

twoSum([1,2, 0, 5, 7,3], 4);
twoSum([1,2,3], 3);
twoSum([1,2,3], 4);
twoSum([1,2,3, 8, 4], 12);
twoSum([3,2,2], 3);
