const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db');
const { getAll, add, update, getDaily } = require('./controllers/entries.js');
const { get } = require('mongoose');

const app = express();

app.use(express.static('dist'));
app.use(bodyParser.json());

app.post('/rapid', add);
app.get('/rapid', getAll);
app.get('/daily', getDaily);

const port = 3000;

app.listen(port, () => {
  console.log(`App listening to port ${port}`)
});
