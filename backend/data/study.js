/*
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

var StudyNoticeSchema = new Schema({

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
    notice: [{
        writer:String,
        title:String,
        content:String
    }],
    board:[{
        title : String,
        writer:String,
        anonymous:String,
        content: String,
        comment:Array
    }],
    schedule: [{
        imagePath:String
    }],
    lecture:[{

    }],
    assignment:[{

    }],

});

studySchema.plugin(autoInc.plugin, 'study')
const study = mongoose.model('study',studySchema);
const studyNotice = mongoose.model('studyNotice',StudyNoticeSchema);
module.exports =study

//완성 x


notice: [{
        writer:String,
        title:String,
        content:String
    }],
    board:[{
        title : String,
        writer:String,
        anonymous:String,
        content: String,
        comment:Array
    }],
*/
