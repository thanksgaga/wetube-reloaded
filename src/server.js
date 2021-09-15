import express from "express";

//first application
const app = express();

// var express = require('express')
// var app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
})
