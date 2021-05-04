var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const expressStaticGzip = require('express-static-gzip')

var indexRouter = require('./routes/index');
var cricketRouter = require('./routes/cricket');
var app = express();
require('dotenv').config()
const databaseUrl = process.env.DB_URI

mongoose.connect(databaseUrl, {
  user: process.env.DB_USER,
  pass: process.env.DB_PASS, useNewUrlParser: true, useUnifiedTopology: true
}, (err) => {
  console.log("Connected", err ? err : true);
})

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

if (process.env.NODE_ENV === "development") {
  var webpack = require("webpack");
  var webpackConfig = require("./webpack.config");
  var compiler = webpack(webpackConfig);

  app.use(
    require("webpack-dev-middleware")(compiler, {
      publicPath: webpackConfig.output.publicPath,
    })
  );
  app.use(require("webpack-hot-middleware")(compiler));
}
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  "/dist/bundle",
  expressStaticGzip(path.join(__dirname, "dist/bundle"), {
    enableBrotli: true,
    orderPreference: ["br", "gz"],
    setHeaders: function (res, path) {
      res.setHeader("Cache-Control", "public, max-age=31536000");
    },
  })
);
app.use('/', indexRouter);
app.use('/cricket', cricketRouter);
app.use(function (req, res, next) {
  next(createError(404));
});
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
