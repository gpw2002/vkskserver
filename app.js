var createError = require('http-errors');
var express = require('express');
const dotenv = require('dotenv') //
dotenv.config({path:'./config.env'}) //
var registerRouter = require('./routes/contact'); //
var registerRouter1 = require('./routes/product'); //
var registerRouter2 = require('./routes/type'); //
var registerRouter3 = require('./routes/users'); //
var registerRouter4 = require('./routes/userdetails'); //
var User = require('./model/user'); //


var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

require('./dbcon/dbc') //

var cors=require('cors') //


var app = express(); //
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use(express.json()) //
app.use(cors()) //
app.use('/contact', registerRouter); //
app.use('/product', registerRouter1); //
app.use('/type', registerRouter2); //
app.use('/users', registerRouter3); //
app.use('/userdetails', registerRouter4); //

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
