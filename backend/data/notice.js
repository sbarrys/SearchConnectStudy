const mongoose = require('mongoose')
var Schema = mongoose.Schema;
const autoInc = require('mongoose-auto-increment')

var noticeSchema = new Schema({

    studyType : String,
    maxMember: Number,
    studyName:String,
   writer : String,
    title: String,
    content:String,
    date:String

});

noticeSchema.plugin(autoInc.plugin, 'notice')
module.exports = mongoose.model('notice',noticeSchema);