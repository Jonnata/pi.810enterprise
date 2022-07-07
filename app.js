var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var carrinhoRouter = require('./src/routers/carrinhoRouter');
var homeRouter = require('./src/routers/homeRouter');
var usersRouter = require('./src/routers/usersRouter');
var produtosRouter = require('./src/routers/produtosRouter');
var produtoInternoRouter = require('./src/routers/produtoInternoRouter');
var loginRouter = require('./src/routers/loginRouter');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'src','views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/carrinho', carrinhoRouter);
app.use('/', homeRouter);
app.use('/users', usersRouter);
app.use(produtosRouter);
app.use(produtoInternoRouter);
app.use(loginRouter);


app.use((req, res) => {
  return res.status(404).render('not-found')
})

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

//module.exports = app;
app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'))