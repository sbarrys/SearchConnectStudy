const mongoose = require('mongoose')
var Schema = mongoose.Schema;
const autoInc = require('mongoose-auto-increment')

var noticeSchema = new Schema({

    studyType : String,
    studyName:String,
   writer : String,
    title: String,
    content:String,
    create_date:{type:Date, default:Date.now}

});

noticeSchema.plugin(autoInc.plugin, 'notice')
module.exports = mongoose.model('notice',noticeSchema);