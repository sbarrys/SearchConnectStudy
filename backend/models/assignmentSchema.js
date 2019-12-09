const mongoose = require('mongoose')
var Schema = mongoose.Schema;

var AssignmentSchema = new Schema({

    writer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title: String,
    content: String,
    deadline: Date,
    anonymous: Boolean,
    file: Object,
    userID: Number
}); 


const Assignment = mongoose.model('assignment', AssignmentSchema);
module.exports = Assignment;
