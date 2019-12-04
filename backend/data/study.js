const mongoose = require('mongoose')
var Schema = mongoose.Schema;
const autoInc = require('mongoose-auto-increment')

var AssignmentSchema = new Schema({

    title : String,
    writer:String,
    content: Number,
    anonymous : String,
    file:Object,
    userID:Number
}); //keep

var LectureSchema = new Schema({

    title : String,
    writer:String,
    content:String,
    file:Object

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

var studySchema = new Schema({

    studyType : String,
    manager:String,
    maxMember: Number,
    studyName:String,
    studyMember:Array,
    notice: NoticeSchema,
    board:BoardSchema,
    schedule:ScheduleSchema,
    lecture:LectureSchema,
    assignment:AssignmentSchema,
    studyID :Number

});

studySchema.plugin(autoInc.plugin, 'study')
module.exports = mongoose.model('study',studySchema);

//완성 x