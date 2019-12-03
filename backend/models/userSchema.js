var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose=require('passport-local-mongoose');
// models/User.js

var mongoose = require("mongoose");

// schema // 1
var userSchema = mongoose.Schema({

 username:{type:String, required:[true,"Username is required!"], unique:true},
 password:{type:String, required:[true,"Password is required!"], select:false},
 name:{type:String, required:[true,"Name is required!"]},
 major:{type:String,required:[true,"major is required!"]},
 profilePic:{
  type : String,
  require:false,
  default:src="https://mblogthumb-phinf.pstatic.net/20150417_264/ninevincent_14291992723052lDb3_JPEG/kakao_11.jpg?type=w800"
},
createdAt:{type:Date,default:Date.now}


},{
 toObject:{virtuals:true}
});

// virtuals // 2
userSchema.virtual("passwordConfirmation")
.get(function(){ return this._passwordConfirmation; })
.set(function(value){ this._passwordConfirmation=value; });

userSchema.virtual("originalPassword")
.get(function(){ return this._originalPassword; })
.set(function(value){ this._originalPassword=value; });

userSchema.virtual("currentPassword")
.get(function(){ return this._currentPassword; })
.set(function(value){ this._currentPassword=value; });

userSchema.virtual("newPassword")
.get(function(){ return this._newPassword; })
.set(function(value){ this._newPassword=value; });

// password validation // 3
userSchema.path("password").validate(function(v) {
 var user = this; // 3-1

 // create user // 3-3
 if(user.isNew){ // 3-2
  if(!user.passwordConfirmation){
   user.invalidate("passwordConfirmation", "Password Confirmation is required!");
  }
  if(user.password !== user.passwordConfirmation) {
   user.invalidate("passwordConfirmation", "Password Confirmation does not matched!");
  }
 }

 // update user // 3-4
 if(!user.isNew){
  if(!user.currentPassword){
   user.invalidate("currentPassword", "Current Password is required!");
  }
  if(user.currentPassword && user.currentPassword != user.originalPassword){
   user.invalidate("currentPassword", "Current Password is invalid!");
  }
  if(user.newPassword !== user.passwordConfirmation) {
   user.invalidate("passwordConfirmation", "Password Confirmation does not matched!");
  }
 }
});
userSchema.plugin(passportLocalMongoose, {
  usernameField: 'username'
});
// model & export
 module.exports = mongoose.model('user', userSchema);


















// //해시 알고리즘 적용 회수, 높을수록 보안은 높음 속도는 느려짐
// var SALT_FACTOR = 10;


// //아이디, 비밀번호, 닉네임, 전공 , 프로필사진
// var userSchema = new Schema({

//       id: {
//         type : String,
//         require : true,
//         unique : true,
//         min:3,
//         max : 20
//       },
//       password : {
//         type : String,
//         min:5,
//         max:20,
//         require : true	
//      },
//      nickname:{
//         type: String,
//         min : 1,
//         max:20,
//         require: true
//      },
//       major : {
//         type : String,
//         require : false
//       },
      // profilePic:{
      //     type : String,
      //     require:false,
      //     default:src="https://mblogthumb-phinf.pstatic.net/20150417_264/ninevincent_14291992723052lDb3_JPEG/kakao_11.jpg?type=w800"
      // },
      // createdAt:{type:Date,default:Date.now}
// });
// userSchema.methods.verifyPassword = function(password, callback) {
//   callback(err, bcrypt.compareSync(password, this.password));
// };
// userSchema.plugin(passportLocalMongoose),{usernameField:'id'};
  
// module.exports = mongoose.model('user', userSchema);//첫번쨰 인자는, document가 사용할 collectiob의 단수적 표현
