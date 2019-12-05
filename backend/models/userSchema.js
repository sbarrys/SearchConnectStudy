var bcrypt=require("bcrypt-nodejs");
var mongoose = require("mongoose");
///////스키마 정의
var userSchema= mongoose.Schema({
  id:{
    type: String,
    required:[true,'id is required!'],
    match:[/^.{4,12}$/,'Should be 4-12 characters!'],
    trim:true,
    unique:true
  },
  password:{
    type:String,
    required:[true,'Password is required!'],
    select:false
  },
  name:{
    type:String,
    required:[true,'Name is required!'],
    match:[/^.{3,12}$/,'Should be 3-12 characters!'],
    trim:true,
    unique:false
  },
  major:{
    type:String,
    trim:true
  },
  gender:{
    type:String
  }
},{
  toObject:{virtuals:true}
});

// userSchema.virtual('passwordConfirmation')
// .get(function(){return this._passwordConfirmation;})
// .set(function(value){this._passwordConfirmation=value;});

userSchema.virtual('originalPassword').
get(function(){return this._originalPassword;})
.set(function(vlaue){this._originalPassword=value;})

userSchema.virtual('currentPassword')
.get(function(){ return this._currentPassword; })
.set(function(value){ this._currentPassword=value; });

userSchema.virtual('newPassword')
.get(function(){ return this._newPassword; })
.set(function(value){ this._newPassword=value; });


// //비밀번호 가능한건지 확인
// var passwordRegex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/;
// var passwordRegexErrorMessage = 'Should be minimum 8 characters of alphabet and number combination!';
// userSchema.path('password').validate(function(v) {
//   var user = this;
//   //유저생성시
//   if(user.isNew){
//     if(!user.passwordConfirmation){
//       user.invalidate('passwordConfirmation','Password Confirmation is required!');
//     }
//     if(!passwordRegex.test(user.password)){
//       user.invalidate('password',passwordRegexErrorMessage);
//     }
//     else if(user.password!==user.passwordConfirmation){
//       user.invalidate('passwordConfirmation','Password Confirmation does not matched!')
//     }
//   }

//   //업데이트시
//   //생략
//   });
  
//패스워드 저장전 암호화 거치기
userSchema.pre('save',function(next){
  var user=this;
  if(!user.isModified('password')){
    return next();
  }
  else{
    user.password=bcrypt.hashSync(user.password);
    return next();
  }
})

// 비밀번호 확을 위해서 메소드 만들어주기
userSchema.methods.authenticate=function(password){
  var user = this;
  console.log("참거짓?"+bcrypt.compareSync(password,user.password));
  
  return bcrypt.compareSync(password,user.password);

}
//모델 내보내기

 const User = mongoose.models.user || mongoose.model('user', userSchema);
module.exports=User;
