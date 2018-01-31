





var box = document.getElementById("box");

function hoverColor() {
    box.style.backgroundColor = "blue";
}

box.addEventListener("mouseover", hoverColor);

box.addEventListener("mousedown", function() {
    box.style.backgroundColor = "red";
});

box.addEventListener("mouseup", function() {
    box.style.backgroundColor = "yellow";
});

window.addEventListener("wheel", function() {
    box.style.backgroundColor = "orange";
});

box.addEventListener("dblclick", function() {
    box.style.backgroundColor = "green";
});

document.addEventListener("keydown", function(event) {
    switch (event.keyCode) {
        case 82:
            box.style.backgroundColor = "red";
            break;
        case 79:
            box.style.backgroundColor = "orange";
            break;
        case 89:
            box.style.backgroundColor = "yellow";
            break;
        case 71:
            box.style.backgroundColor = "green";
            break;
        case 66:
            box.style.backgroundColor = "blue";
            break;
        // default: box.style.backgroundColor = "white";
    }
});
