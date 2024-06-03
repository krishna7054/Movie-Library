// models/list.js
const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    movies: [{
        type: Object,
    }],
    isPublic: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });

const List = mongoose.model('List', listSchema);
module.exports = List;
