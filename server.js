const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = require('./config/keys').mongoURI;

const app = express();

//middleware bodyparser
app.use(bodyParser.json());

mongoose.connect(db)
    .then(() => console.log('connected'))
    .catch(er => console.log(er));

const port = process.env.port || 5000;

app.listen(port, () => console.log(`server started on ${port}`));