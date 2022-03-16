import express from 'express';
import Datastore from 'nedb';

// var fs = require("fs");
const app = express();
app.listen(3000, () => console.log('listening'));

app.use(express.static('public'));
app.use(express.json()); //let know the server to parse incoming data as json

const db = new Datastore('databse.db');
db.loadDatabase();

app.get('/apicall', (req, res) => {
  db.find({}, (err, data) => {
    if (err) {
      res.end();
      return;
    }
    res.json(data);
  });
});

app.post('/apicall', (req, res) => {
  console.log(req.body);
  db.insert(req.body); //adding to the database
  res.json(req.body);
});

///
// The js on the client side geolocates the lat and long and then is sending the data to the server with a POST request and then server is sending it back as a response that it was success
