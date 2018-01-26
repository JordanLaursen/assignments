

var str = "PAnama Canal";
var str2 = "";

function cutOutA() {
    str = str.toLowerCase();
    for(var i = 0; i < str.length; i++) {
        if(str[i] !== "a") {
            str2 += str[i];
        }
    }
    console.log(str2);
}

cutOutA();
