const mongoose = require('mongoose')
var Schema = mongoose.Schema;
const autoInc = require('mongoose-auto-increment')

var AssignmentSchema = new Schema({

    writer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    title : String,
    content: String,
    anonymous : String,
    file:Object,
    userID:Number
}); //keep
var LectureSchema = new Schema({

    writer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    title : String,
    content:String,
    file:Object,
    date:{ type: Date, default: Date.now }

});
var imageSchema = new Schema({
    imagePath:String

})

var boardSchema = new Schema({
    writer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    title:String,
    content:String
})

var studyNoticeSchema=new Schema({
    writer:{
    type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    title:String,
    content:String
})

var noticeSchema = new Schema({

    noticeID : Number, //index 값 -Notice.vue에서 v-for 돌때 설정
    studyType : String,
    maxMember: Number,
    studyName:String,
    writer :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    title: String,
    content:String,
    studyMember:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }],
    date : { type: Date, default: Date.now },
    notice:[studyNoticeSchema], //writer
    board:[boardSchema], //writer
    schedule: [imageSchema],
    lecture:[LectureSchema],
    assignment:[AssignmentSchema],

});

//noticeSchema.plugin(autoInc.plugin, 'notice')
const notice =  mongoose.model('notice',noticeSchema);

module.exports = notice
