let endpoint = "http://localhost:8080/monkeys";
let query = {
  color: "black",
  species: "howler"
}

let string = "?";

function stringifyUrl(url, query1) {
    for(let key in query){
        string += key + "=" + query1[key] + "&";
    }
    const prop = string.slice(0, -1);
    console.log(url + prop);
}

stringifyUrl(endpoint, query);
