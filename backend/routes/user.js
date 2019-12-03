// routes/users.js
var express = require("express");
var router = express.Router();
var User  = require("../models/userSchema");

// Index // 1
router.get("/", function(req, res){
 User.find({})
 .sort({username:1})//오름차순
 .exec(function(err, users){
  if(err) return res.json(err);
  res.json(users)
  //res.render("users/index", {users:users});
 });
});

// New
router.get("/new", function(req, res){
 res.render("users/new");        //<!-- views/users/new.ejs -->로 랜더링
});

// create
router.post("/", function(req, res){
 User.create(req.body, function(err, user){
  if(err) return res.json(err);
  res.redirect("/users");
 });
});

// show
router.get("/:username", function(req, res){
 User.findOne({username:req.params.username}, function(err, user){
  if(err) return res.json(err);
  res.render("users/show", {user:user});
 });
});

// edit
router.get("/:username/edit", function(req, res){
 User.findOne({username:req.params.username}, function(err, user){
  if(err) return res.json(err);
  res.render("users/edit", {user:user});
 });
});

// update // 2
router.put("/:username",function(req, res, next){
 User.findOne({username:req.params.username}) // 2-1
 .select("password") // 2-2 //모델에서 password 는 selectfalse 로 되어있었는데 이제는 불러오겟다는 것이다.
 .exec(function(err, user){
  if(err) return res.json(err);

  // update user object
  user.originalPassword = user.password;
  user.password = req.body.newPassword? req.body.newPassword : user.password; // 뉴패스워드있으면 뉴패스워드를 패스워드에 넣어주고 아니면 user.password를 넣어준다.
  for(var p in req.body){ // 2-4
   user[p] = req.body[p];
  }

  // save updated user
  user.save(function(err, user){
   if(err) return res.json(err);
   res.redirect("/users/"+req.params.username);
  });
 });
});

module.exports = router;
//https://www.a-mean-blog.com/ko/blog/Node-JS-%EC%B2%AB%EA%B1%B8%EC%9D%8C/%EA%B2%8C%EC%8B%9C%ED%8C%90-%EB%A7%8C%EB%93%A4%EA%B8%B0/%EA%B2%8C%EC%8B%9C%ED%8C%90-%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85