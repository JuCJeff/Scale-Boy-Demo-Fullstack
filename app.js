var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var homePage = require('./routes/homePage');
var recipeOption = require('./routes/recipeOption');
var recipeList = require('./routes/recipeList');
var recipeDetails_ChickenAndOnion= require('./routes/recipeDetails_ChickenAndOnion');
var ingredientsPrompt = require('./routes/ingredientsPrompt');
var nutriVals = require('./routes/nutriVals');
var scalePage = require('./routes/scalePage');
var portionPage = require('./routes/portionPage');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', homePage);
app.use('/recipeOption', recipeOption);
app.use('/recipeList', recipeList);
app.use('/recipeDetails_ChickenAndOnion', recipeDetails_ChickenAndOnion);
app.use('/ingredientsPrompt', ingredientsPrompt);
app.use('/nutriVals', nutriVals);
app.use('/scalePage', scalePage);
app.use('/portionPage', portionPage);



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
