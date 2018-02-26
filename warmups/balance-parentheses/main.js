

const balance = str => {
    let openCount = 0;
    let closeCount = 0;
    let tracker = 0;
    const openArr = str.split("").forEach(item => item === "(" ? openCount++ && tracker++: openCount = openCount);
    const closeArr = str.split("").forEach(item => item === ")" ? closeCount++ && tracker--: closeCount = closeCount);
    return openCount === closeCount;
}




console.log(balance("((()))"));
console.log(balance("none"));
console.log(balance("dfaks()"));
console.log(balance("akdfdkj("));

// ********************************************  Working
// const balance = str => {
//     const strArr = str.split("");
//     let openCount = 0;
//     let closeCount = 0;
//     for(let i = 0; i < strArr.length; i++) {
//         if(strArr[i] === "(") {
//             openCount++;
//         } else {
//             closeCount++;
//         }
//     }
//     return openCount === closeCount;
// }
