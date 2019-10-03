require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

mongoose.connect(process.env.DB_STRING_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
''

app.use(express.json());
app.use(routes);

console.log('started at :3333');

app.listen(3333);