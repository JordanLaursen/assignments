

var alphabet = "abcdefghijklmnopqrstuvwxyz";

function frequency(str) {
    var notUsed = "";
    var used = "";
    var freqUsed = {};
    for(var i = 0; i < str.length; i++) {
        var checkUsed = str.charAt(i);
        if(notUsed.indexOf(str[i]) !== str.indexOf(str[i])) {
            notUsed += str[i];
        } else {
            used += str[i];
        }
        if(freqUsed[checkUsed]) {
            freqUsed[checkUsed]++;
        } else {
            freqUsed[checkUsed] = 1;
        }
    }
    console.log(notUsed);
    console.log(used);
    console.log(freqUsed);
}

frequency("slimy smelly solution");
