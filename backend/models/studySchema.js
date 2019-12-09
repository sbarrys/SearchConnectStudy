const mongoose = require('mongoose')
var Schema = mongoose.Schema;
var studySchema = new Schema({

    studyID: Number, //index 값 -Notice.vue에서 v-for 돌때 설정
    studyType: {type:String,required:true}, 
    maxMember: Number,
    studyName: {type:String,required:true},
    writer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title: {type:String,required:true},
    content: {type:String,required:true},
    studyMember: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        }],
    date: { type: Date, default: Date.now },
    notice: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:'post'
    }], //writer
    board: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'post'
        }]
        ,
            // assignment: [AssignmentSchema],

});


const study = mongoose.model('study', studySchema);

module.exports = study