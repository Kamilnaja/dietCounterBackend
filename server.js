const express = require('express');
const app = express();
const port = 8080;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = require('./db');
const routes = require('./routes');
const allProducts = require("./all.json");
const cors = require('cors');
const bodyParser = require('body-parser');

mongoose.set('debug', true);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', routes);

app.listen(port, console.log('hello world'));
