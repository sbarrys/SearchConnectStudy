var express = require('express'); // express 모듈 사용하기 위함
var router = express.Router();
var passport = require('passport');
require('../passport');
var bcrypt=require('bcrypt-nodejs');
var User =require('../models/userSchema')

 router.get('/',function(req,res){
     res.render('/index');
});

// 로그인 라우팅 POST /login
router.post('/', async function(req, res, next) {
    var id = req.body.id;
    let hashpasswordinDB='';

   await  User.findOne({id:id},function(err,user){
        if(err){
            console.log('Not exist  ID');
        }
        console.log(user);
        hashpasswordinDB= user.hash;

    })
    console.log("password에 해쉬값 잖들어갓나"+hashpasswordinDB);



     bcrypt.compare(req.body.password,hashpasswordinDB,function(err,res){
        if(err){
            console.log('bcrypt.compare() error: ',err.message);
        }   
        else{
            if(res){console.log('plainTextPassword===hashedPassword');}
            else{console.log('plainTextPassed!==hashsedPassword');}
        }
    })
});

module.exports = router;