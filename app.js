const express = require('express');
const cors = require('cors'); // Import the cors middleware
const app = express();
const path = require('path');
require('dotenv').config();

const port = 4000;
const rout = require('./routes/router');

// Set view engine and views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Use cors middleware
app.use(cors());

app.use(express.static('public'));
app.use(rout);
app.listen(port, () => console.log("Listening on port " + port));
