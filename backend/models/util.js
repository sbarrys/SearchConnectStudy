var jwt = require('jsonwebtoken');

var util = {};


//success json 을 만드는 함수입니다. API가 return하는 json의 형태를 통일시키기 위해 
//바로 함수를 통해 json 오브젝트를 만들고 이를 return하게 됩니다.
util.successTrue = function (data) {
    return {
        success: true,
        message: null,
        errors: null,
        data: data      //로그인 성공하면 토큰이 실린다.
    };
};
//API성공하지 못할경우 return 하는 json
util.successFalse = function (err, message) {
    if (!err && !message) message = 'data not found';
    return {
        success: false,
        message: message,
        errors: (err) ? util.parseError(err) : null,
        data: null
    };
};

//몽구스에서 오거나 db에서 오는 메세지 형태가 다르므로 통일시킴
util.parseError = function (errors) {
    console.log(errors);
    var parsed = {};
    if (errors.name == 'ValidationError') {
        for (var name in errors.errors) {
            var validationError = errors.errors[name];
            parsed[name] = { message: validationError.message };
        }
    } else if (errors.code == '11000' && errors.errmsg.indexOf('username') > 0) {
        parsed.username = { message: 'This username already exists!' };
    } else {
        parsed.unhandled = errors;
    }
    return parsed;

}


// middlewares
/*4. 미들웨어로 token이 있는지 없는지 확인하고
 token이 있다면 jwt.verify함수를 이용해서 토큰 hash를 확인하고
 토큰에 들어있는 정보를 해독합니다. 
 해독한 정보는 req.decoded에 저장하고 있으며
이후 로그인 유무는 decoded가 있는지 없는지를 통해 알 수 있습니다. 
util.js를 먼저 설명하다보니 토큰 생성부분보다 토큰 인증부분을 먼저 설명하게 되었네요.

*/

util.isLoggedin = function (req, res, next) { 
    var token = req.headers['x-access-token'];
    
    if (!token) return res.json(util.successFalse(null, 'token is required!'));
    else {
        jwt.verify(token, "a0eff3l76bca"/*process.env.JWT_SECRET*/, function (err, decoded) {
            if (err) return res.json(util.successFalse(err));
            else {
                req.decoded = decoded;
                next();
            }
        });
    }
};

module.exports = util;
