const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send({success: true, message: "It's Working"})
})

app.listen(7000, () => {
    console.log("Server is running on port 8000");
});
