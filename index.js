const express = require("express");
const app = express();
const userData = require("./users.json");
const postData = require("./posts.json");
const albumData = require("./albums.json");
let PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Sample API");
});

app.get("/users", (req, res) => {
    res.send(userData);
});

app.get("/posts", (req, res) => {
    res.send(postData);
});

app.get("/albums", (req, res) => {
    res.send(albumData);
});

app.listen(PORT, () => {
    console.log(`Listening on PORT${PORT}`);
});