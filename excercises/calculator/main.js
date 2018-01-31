

var add = document.getElementById("button");
var subtract = document.getElementById("button2");
var multiply = document.getElementById("button3");

add.addEventListener("click", function(event) {
    event.preventDefault();
    var input1 = parseInt(document.getElementById("input1").value);
    var input2 = parseInt(document.add.second.value);
    document.getElementById("result").innerHTML += input1 + input2;
});

subtract.addEventListener("click", function(event) {
    event.preventDefault();
    var input3 = parseInt(document.getElementById("input3").value);
    var input4 = parseInt(document.subtract.second.value);
    document.getElementById("result2").innerHTML += input3 - input4;
});

multiply.addEventListener("click", function(event) {
    event.preventDefault();
    var input5 = parseInt(document.getElementById("input5").value);
    var input6 = parseInt(document.multiply.second.value);
    document.getElementById("result3").innerHTML += input5 * input6;
});
