#!/usr/bin/env node

import {roll} from './lib/roll.js'
import express from 'express';
import minimist from 'minimist';

const app = express()
const args = minimist(process.argv.slice(2))
app.use(express.urlencoded({ extended: true}));

app.get("/app/", function(req, res) {
    res.send('200 OK')
})

app.get("/app/roll/", function(req, res) {
    var sides = 6;
    var dice = 2;
    var rolls = 1;
    var result = roll(sides, dice, rolls)
    res.status(200).send(result)
})

app.post("/app/roll/", function(req, res) {
    var sides = parseInt(req.body.sides);
    var dice = parseInt(req.body.dice);
    var rolls = parseInt(req.body.rolls);
    var result = roll(sides, dice, rolls)
    res.status(200).send(result)
})

app.get("/app/roll/:sides/", function(req, res) {
    var sides = parseInt(req.params.sides);
    var result = roll(sides, 2, 1)
    res.status(200).send(result)
})

app.get("/app/roll/:sides/:dice/", function(req, res){
    var sides = parseInt(req.params.sides);
    var dice = parseInt(req.params.dice);
    var result = roll(sides, dice, 1)
    res.status(200).send(result)
})

app.get("/app/roll/:sides/:dice/:rolls/", function(req, res){
    var sides = parseInt(req.params.sides);
    var dice = parseInt(req.params.dice);
    var rolls = parseInt(req.params.rolls);
    var result = roll(sides, dice, rolls)
    res.status(200).send(result)
})

app.use(function(req, res){
	res.status(404).send("404 NOT FOUND");
});

var port = 5000
if (args.port) {
    port = args.port
}
app.listen(port, function() {
    console.log("Server is listening on port " +port +".")
})