



var addSum = document.getElementById("button");

addSum.addEventListener("click", function(event) {
    event.preventDefault();
    var caught1 = parseInt(document.mario2.bobOmbs.value);
    var caught2 = parseInt(document.mario.goombas.value);
    var caught3 = parseInt(document.mario3.cheepCheeps.value);
    var input1 = parseInt(document.mario2.bobOmbs.value * 7);
    var input2 = parseInt(document.mario.goombas.value * 5);
    var input3 = parseInt(document.mario3.cheepCheeps.value * 11);
    document.getElementById("caughtResult").innerHTML = "Total pests removed: " + (caught1 + caught2 + caught3) + ".";
    document.getElementById("costResult").innerHTML = "Total cost of pest removal: " + (input1 + input2 + input3) + " coins.";
});
