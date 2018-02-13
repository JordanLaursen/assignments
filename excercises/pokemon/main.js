



var xhr = new XMLHttpRequest();

xhr.open("GET", "http://api.vschool.io:6543/pokemon.json", true);
xhr.send();

xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        console.log(data);
    }
}
