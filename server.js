const express = require("express")
const minimist = require("minimist")


const app = express()

app.get("/app", function(req, res) {
    console.log(res.statusCode)
})

app.get("/app/roll", function(req, res) {

})

app.use((req, res, next) => {
    res.status(404).send(
        "<h1>Page not found on the server</h1>")
})

var port = 5000
app.listen(port)