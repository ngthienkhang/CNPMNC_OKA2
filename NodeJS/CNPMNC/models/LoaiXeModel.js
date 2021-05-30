const mongoose = require('mongoose')

const loaixeSchema = new mongoose.Schema({
    _id: {
        type: String,
        require: true
    },
    tenLoaiXe: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('LoaiXe',loaixeSchema)