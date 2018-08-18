const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/ngoals';

mongoose.connect(url);
mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDb connection error'));