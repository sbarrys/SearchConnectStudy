var express = require('express');
var router = express.Router();
var User = require('../models/userSchema'); 

router.post('/', function (req, res) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    User.register({ username: req.body.nickname, id: req.body.id, nickname: req.body.nickname, major: req.body.major }, req.body.password, function (err, user) {
        if (err) {
            res.json({ success: false, message: "Your account could  not be saved. Error: ", err })
        } else {
            res.json({ user, success: true, message: "Your account has been saved" })
        }
    });
}); 



module.exports = router;

//https://jungwoon.github.io/node.js/2017/08/07/bcrypt-nodejs/   현재문서
//https://velog.io/@ground4ekd/nodejs-passport     미들웨어 + 플러그인 사용한 간단버전 이렇게 바꿔보자.