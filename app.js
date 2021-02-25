var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

// Connection With DB

mongoose.connect(process.env.DB_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  },
  (err) => {
  console.log(err || `Connected to DB`)
})

var usersRouter = require('./routes/todo');

var app = express();

// Middleware

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Routes

app.use('/api/todo', usersRouter);

app.all('*', function (req, res, next) {
	return next(`The following endpoint is not available, only endpoint available is '/api/todo' with following method ('GET', 'POST', 'DELETE', 'PUT')`);
});

// Error

app.use((err, req, res, next) => {
  console.log(err);
  return res.type("json").send({
    error: {
    message: err
  }})
})

module.exports = app;
