const mongoose = require('mongoose')
var Schema = mongoose.Schema;
const autoInc = require('mongoose-auto-increment')

var studySchema = new Schema({

    studyType : String,
    manager:String,
    maxMember: Number,
    studyName:String,
    studyMember:Array,
    _id :Number

});

studySchema.plugin(autoInc.plugin, 'study')
module.exports = mongoose.model('study',studySchema);