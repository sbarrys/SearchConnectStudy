
User = require ("./models/userSchema");
passport = require("passport");

LocalStrategy = require('passport-local').Strategy;
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// passport.use('local',new LocalStrategy(
//   function(id, password, done) {
//     User.findOne({ username: id }, function (err, user) {

//       console.log(password+",,"+user) ;
//   res.json(user); // Contains salt and hash fields
//       if (err) {
//         console.log('1111') ;
//         return done(err); }
//       if (!user) {
//         console.log('2222') ;

//          return done(null, false); }

//       if (user.password != password) { 
//         return done(null, false); }
//       return done(null, user);
//     });
//   }
// ));
// // 유저라 로그인 했을 때 (에러가 날경우, 해당계정없음, 비밀번호 부적합, 로그인 성공)에 대한 처리

// passport.serializeUser(function(user, done) {
//   done(null, user.id); //user.id 만 쿠키에 담는다.
// });
// // user ID를 클라이언트한테 쿠키로 보내기 설정

// passport.deserializeUser(function(id, done) {
//   User.findById(id, function(err, user) {
//     done(err, user);
//   });
// });
// // 쿠키로 인증 성공/실패시 처리
