

var noDuplicateArr = [];
var duplicateArr = [];

function noDuplicates(originalString) {
    var noDuplicatesString = "";
    var extras = "";
    for(var i = 0; i < originalString.length; i++) {
        // console.log(noDuplicatesString.indexOf(originalString[i]));
        if(noDuplicatesString.indexOf(originalString[i]) === -1) {
            noDuplicatesString += originalString[i];
        } else {
            extras += originalString[i];
        }
    }
    console.log("No duplicates: " + noDuplicatesString + ". The Extras: " + extras)
}

noDuplicates("campbell savona central school");

// console.log(noDuplicateArr);
//
// console.log(duplicateArr);
