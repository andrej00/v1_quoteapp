const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongo = require('mongodb').MongoClient;
const url = 'mongodb+srv://dbUser-admin:otorinolaringologija@quote-finder-efbcl.mongodb.net/quote-finder-db?retryWrites=true&w=majority';

app.use(bodyParser.json());

mongo.connect(url, (err) => {
  if (err) throw err;
  console.log('Database connected')
});

app.get('/data', (req, res) => {
  mongo.connect(url, (err, db) => {
    if (err) throw err;
    const dbo = db.db("quote-finder-db");
    const collection = dbo.collection('quotes');
    const { radio, text } = req.query;
    let query = {};

    query[radio] = new RegExp(text, 'i');

    // if nothing is entered, return every quote
    if (radio === '' && text === '') {
      query = {};
    }

    collection.find(query).toArray((q, data) => res.json(data));
  });
});

app.post('/data', (req, res) => {
  mongo.connect(url, (err, db) => {
    if (err) throw err;
    const dbo = db.db("quote-finder-db");
    const collection = dbo.collection('quotes');
    const { quote, source } = req.body;

    if (quote === '' && source === '') return;

    collection.insertOne({
      quote: quote, 
      source: source
    });
  });
});

app.listen(3200, () => {
  console.log('Server listening on port 3200!');
});
