
let i = Math.floor(Math.random() * 10000000000000000);
while(i !== 1){
    if(i % 3 === 0){
        i /= 3;
        console.log(i);
    } else if(i % 3 === 1){
        i--;
        console.log(i);
    } else {
        i++;
        console.log(i);
    }
}
