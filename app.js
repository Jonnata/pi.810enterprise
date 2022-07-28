const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const methodOverride = require("method-override");
const logger = require('morgan');
const sessionParser = require('express-session');


const carrinhoRouter = require('./src/routers/carrinhoRouter');
const homeRouter = require('./src/routers/homeRouter');
const usersRouter = require('./src/routers/usersRouter');
const produtosRouter = require('./src/routers/produtosRouter');
const produtoInternoRouter = require('./src/routers/produtoInternoRouter');
const loginRouter = require('./src/routers/loginRouter');
const cadastroRouter = require('./src/routers/cadastroRouter');
const painelUsuarioRouter = require('./src/routers/painelUsuarioRouter');
const compraFinalizadaRouter = require('./src/routers/compraFinalizadaRouter');
const logMiddleware = require("./src/middlewares/log");

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'src','views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(sessionParser({ secret: '810enterPrise', resave: false, saveUninitialized: false }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride("_method"));
app.use(logMiddleware);



app.use('/carrinho', carrinhoRouter);
app.use('/', homeRouter);
app.use('/users', usersRouter);
app.use(produtosRouter);
app.use(produtoInternoRouter);
app.use(loginRouter);
app.use(cadastroRouter);
app.use(painelUsuarioRouter);
app.use(compraFinalizadaRouter);


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