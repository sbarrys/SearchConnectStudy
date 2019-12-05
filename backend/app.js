var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');
const autoInc = require('mongoose-auto-increment')

var indexRouter = require('./routes/index');
var authRouter = require('./routes/auth');
var userRouter = require('./routes/user');
var usersRouter = require('./routes/users');

var app = express();
// CONNECT TO MONGODB SERVER//////////////////////////
var db = mongoose.connection;
console.log('데이터베이스 연결 시도')
mongoose.set('useCreateIndex', true);

mongoose.connect('mongodb://localhost/teamproject',{useNewUrlParser: true   , useUnifiedTopology: true});
autoInc.initialize(mongoose.connection)

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

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

var noticeRouter = require('./routes/notice');

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'content-type, x-access-token'); //1
    next();
  });




app.use(logger('dev'));
app.use(cookieParser());
app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/users', usersRouter);
app.use('/notices', noticeRouter); ///
app.use(multer({
    dest: "../upload/",
    limits:{
        fileSize:1024*1000*16
    }
}
));



module.exports = app;


//https://www.a-mean-blog.com/ko/blog/Node-JS-%EC%B2%AB%EA%B1%B8%EC%9D%8C/%EA%B2%8C%EC%8B%9C%ED%8C%90-%EB%A7%8C%EB%93%A4%EA%B8%B0/%EA%B2%8C%EC%8B%9C%ED%8C%90-%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85
