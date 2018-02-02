


var randPass = "ABCDEFGHIJKL!@#$%^&*?<>'\"MNOPQRSTUVWXYZab~-{}|cdefghijklmnopqrstuvwxyz_0123456789";
var passwordNew = "";

function makeRandPass(passLength) {
    for(var i = 0; i < parseInt(passLength); i++) {
        passwordNew += randPass[Math.floor(Math.random() * randPass.length)];
    }
    console.log(passwordNew);
}

makeRandPass(25);
