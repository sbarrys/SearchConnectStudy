const mongoose = require('mongoose')
var Schema = mongoose.Schema;
const autoInc = require('mongoose-auto-increment')

var AssignmentSchema = new Schema({

    writer: {
        type: mongoose.Schema.Types.ObjectId,
<<<<<<< HEAD
        ref: 'user'//소문자로해야합니다.수정by태윤
    },
    title: String,
    content: String,
    anonymous: String,
=======
        ref:'user'
    },
    title : String,
    content: String,
    deadline: Date,
    anonymous : Boolean,
>>>>>>> 965a262b57fc2b3254cd4ab84dd054c11d14875c
    file: Object,
    userID: Number
}); //keep
var LectureSchema = new Schema({

    writer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title: String,
    content: String,
    file: Object,
<<<<<<< HEAD
=======

>>>>>>> 965a262b57fc2b3254cd4ab84dd054c11d14875c
    date: { type: Date, default: Date.now }

});
var imageSchema = new Schema({

    data: Buffer,

    writer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

})

var commentSchema = new Schema({
    writer: {
        type: mongoose.Schema.Types.ObjectId,
<<<<<<< HEAD
        ref: 'user'
=======
        ref:'User'
>>>>>>> 965a262b57fc2b3254cd4ab84dd054c11d14875c
    },
    content: String
})
var boardSchema = new Schema({
    writer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title: String,
    content: String,
    comment: [commentSchema],
    date: { type: Date, default: Date.now }
})

var studyNoticeSchema = new Schema({
    writer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title: String,
    content: String,
    date: { type: Date, default: Date.now }
})

var noticeSchema = new Schema({

    noticeID: Number, //index 값 -Notice.vue에서 v-for 돌때 설정
    studyType: String,
    maxMember: Number,
    studyName: String,
    writer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title: String,
    content: String,
    studyMember: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }],
    date: { type: Date, default: Date.now },
    notice: [studyNoticeSchema], //writer
    board: [boardSchema], //writer
    schedule: [imageSchema],
    lecture: [LectureSchema],
    assignment: [AssignmentSchema],

});

//noticeSchema.plugin(autoInc.plugin, 'notice')
const notice = mongoose.model('notice', noticeSchema);

module.exports = notice
