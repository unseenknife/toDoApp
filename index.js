const http       = require("http");
const express    = require('express');
const mysql      = require('mysql2');
const bodyParser = require('body-parser');

const app        = express();

//start body-parser configuration
app.use(bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({    // to support URL-encoded bodies
  extended: true
}));
//end body-parser configuration
