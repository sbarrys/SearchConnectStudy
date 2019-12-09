const mongoose = require('mongoose')
var Schema = mongoose.Schema;


var postSchema = new Schema({
    writer: {

        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title: String,
    content: String,

    date: { type: Date, default: Date.now },
    fromstudy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'study'
    },


})

const Post = mongoose.model('post', postSchema);
module.exports = Post
