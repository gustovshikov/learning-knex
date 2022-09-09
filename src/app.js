const express = require('express');
const app = express();
const port = 8080;

const knex = require('knex')(require('../knexfile.js')['development']);

app.get('/', (req, res) => {
  res.send('APP RUNNING AWAY!');
});

app.get('/pets', (req, res) => {
  knex('pet')
    .select('*')
    .then(data => {
      let petNames = data.map(pet => pet.name);
      res.json(petNames);
    });
});

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
