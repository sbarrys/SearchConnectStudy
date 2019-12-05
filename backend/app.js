var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var session = require('express-session');
var mongoose = require('mongoose')
const autoInc = require('mongoose-auto-increment')



mongoose.connect('mongodb://localhost:27017/mainNotice',{useFindAndModify:false});
autoInc.initialize(mongoose.connection)
const db = mongoose.connection;


var app = express();


app.use(session({
    secret: '@#@$MYSIGN#@$#$',
    resave: false,
    saveUninitialized: true
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors()); // CORS 미들웨어 추가

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var noticeRouter = require('./routes/notice');
var studyRouter = require('./routes/study')

app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/notices', noticeRouter);
app.use('./room',studyRouter) //



module.exports = app;
