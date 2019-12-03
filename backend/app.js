var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');
var flash = require('connect-flash');

var indexRouter = require('./routes/index');
var joinRouter = require('./routes/join');
var userRouter = require('./routes/user');
var logoutRouter = require('./routes/logout');
var app = express();
var session= require('express-session')
var passport = require('passport');
require('./passport');
// CONNECT TO MONGODB SERVER//////////////////////////
var db = mongoose.connection;
console.log('데이터베이스 연결 시도')
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost/teamproject',{ useNewUrlParser: true   , useUnifiedTopology: true});

db.on('error', console.error);
db.once('open', function(){
    // CONNECTED TO MONGODB SERVER
    console.log("Connected to mongod server");
});
db.on('disconnected',function(){
    console.log('연결이 끊어졋습니다.');
})
////////////////////////////////////////////////////////

// [CONFIGURE APP TO USE bodyParser]
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
// [CONFIGURE SERVER PORT]
var port = process.env.PORT || 8080;
// [CONFIGURE APP TO USE express]
app.use(passport.initialize()); // passport 초기화 passport 를 초기화 해주면 user 정보가 req.user 로 들어가게 된다
app.use(passport.session());    //로그인을 지속시키기 위해서 필수
app.use(session({ secret :'sessionsecret' }));   //secret 은 필수 옵션으로 우리가 보내주는 session ID를 암호화 해줄 것이다

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');




app.use(flash());
app.use(logger('dev'));
app.use(cookieParser());
app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/join', joinRouter);
app.use('/logout', logoutRouter);

module.exports = app;


//https://www.a-mean-blog.com/ko/blog/Node-JS-%EC%B2%AB%EA%B1%B8%EC%9D%8C/%EA%B2%8C%EC%8B%9C%ED%8C%90-%EB%A7%8C%EB%93%A4%EA%B8%B0/%EA%B2%8C%EC%8B%9C%ED%8C%90-%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85