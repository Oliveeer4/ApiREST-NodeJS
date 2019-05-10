const express = require('express');
const bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

require('./controllers/authController')(app);
require('./controllers/projectControllers')(app);

app.listen(3000);