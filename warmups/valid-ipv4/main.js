



const isValid = str => {
    let ipArr = str.split(".");
    // console.log(ipArr);
    let arrLength = 0;
    for(let i = 0; i < ipArr.length; i++) {
        if(ipArr[i] < 256 && ipArr[i] >= 0) {
            arrLength++;
        }
    }
    let finalArr = ipArr.join(".");
    if(arrLength === 4) {
        return `${finalArr} is a valid ipv4 address.`;
    } else {
        return `${finalArr} is not a valid ipv4 address.`;
    }
}


console.log(isValid("192.168.1.1"));
