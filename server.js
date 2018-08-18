const express = require('express');
const app = express();
const port = 8080;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = require('./db');
const routes = require('./routes');
const allProducts = require("./all.json");
const cors = require('cors');
mongoose.set('debug', true);
app.use(cors());

app.use('/', routes);

app.get('/', (req, res) => {
	res.json('Hello world');
});

app.get('/categories', (req, res) => {
	res.json(allProducts);
})

app.get('/forbidden', (req, res) => {
	res.json(allProducts);
})

app.listen(port, console.log('hello world'));