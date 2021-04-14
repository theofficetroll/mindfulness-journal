const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db');
const { getAll, add, update } = require('./controllers/entries.js');

const app = express();

app.use(express.static('dist'));
app.use(bodyParser.json());

app.post('/rapid', add);
app.get('/rapid', getAll);

const port = 3000;

app.listen(port, () => {
  console.log(`App listening to port ${port}`)
});
