const axios = require("axios");
const button = document.getElementById("button");
const randomText = document.getElementById("randomText");

const info = axios.get("https://api.vschool.io/jordanlaursen/todo").then(function(response) {
    return response.data;
});

button.addEventListener("click", function() {
    randomText.innerHTML = info;
});
