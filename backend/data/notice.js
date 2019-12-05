const mongoose = require('mongoose')
var Schema = mongoose.Schema;
const autoInc = require('mongoose-auto-increment')

var AssignmentSchema = new Schema({

    title : String,
    writer:String,
    content: String,
    anonymous : String,
    file:Object,
    userID:Number
}); //keep
var LectureSchema = new Schema({

    title : String,
    writer:String,
    content:String,
    file:Object,
    date:String

});
var ScheduleSchema = new Schema({

    imagePath:String
});

var BoardSchema = new Schema({
    title : String,
    writer:String,
    anonymous:String,
    content: String,
    comment:Array
});

var NoticeSchema = new Schema({

    title : String,
    writer:String,
    content: String,
});



var noticeSchema = new Schema({

    studyType: String,
    maxMember: Number,
    studyName: String,
    writer: String,
    title: String,
    content: String,
    date: String,
    studyMember: Array,
    lecture: [LectureSchema],
    assignment:[AssignmentSchema]

});

noticeSchema.plugin(autoInc.plugin, 'notice')
module.exports = mongoose.model('notice',noticeSchema);
