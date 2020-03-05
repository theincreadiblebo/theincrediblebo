const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

const publicUrl = path.join(__dirname, '..', 'build' ); // use pwd to see full link

app.use(express.static(publicUrl));

app.get("*", (req, res) => {
    res.sendFile(path.join(publicUrl, 'index.html'))
}); // request: server tra ve, respond: server respond

app.get("/category", (req, res) => {
    res.send("Hello category");
})

app.listen(port, () => {
    console.log("Server is up!");
});



