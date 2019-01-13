const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment');

const schema = new Schema({
    text: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    _user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
    }
});


exports.logModel = mongoose.model('Log', schema);