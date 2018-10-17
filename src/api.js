//api.js 

const express = require("express");
const app = express();
const greeting = require("./greeting");
app.get("/greeting/:name", (req, res) => {
    // 1. set's the status code to 200 
    res.status(200);
    // 2. and returns an object with the greeting  
    // Hint: `req.params.name`
    var object = {greeting: "Hello, " + req.params.name + "!"}
    res.send(object);
});
    module.exports = app;