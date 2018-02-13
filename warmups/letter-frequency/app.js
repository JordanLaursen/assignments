

var frontBack = function(str) {
    var changes = "";
    if(true) {
        changes += str[0];
        changes += str[str.length - 1];
    }
    str[0] = changes[1];
    str[str.length - 1] = changes[0];
    console.log(str);
    console.log(changes);
}

frontBack("hello");
