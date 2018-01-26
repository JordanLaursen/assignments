



function addSum(num1, num2) {
    var sum = num1 + num2;
    console.log(sum);
}

addSum(2,2);

//*****************************************************

function largestOf(num1, num2, num3) {
    if(num1  > num2 && num1 > num3){
        console.log(num1);
    } else if (num2 > num1 && num2 > num3) {
        console.log(num2);
    } else if (num3 > num1 && num3 > num2) {
        console.log(num3);
    }
}

largestOf(4, 5, 3);

//*****************************************************

function evenOrOdd(n) {
    if(n % 2 === 0) {
        console.log(n + " is even");
    } else {
        console.log(n + " is odd");
    }
}

evenOrOdd(127843537846);

//*****************************************************

function acceptString(str) {
    if(str.length <= 20) {
        console.log(str + str);
    } else {
        str2 = str.slice(str.length / 2);
        console.log(str2);
    }
}

acceptString('dolphinsdolphinsdolphinsdolphinsdolphinsdolphinsdolphinsdolphins');
