const mongoose = require('mongoose')

const hangxeSchema = new mongoose.Schema({
    _id: {
        type: String,
        require: true
    },
    tenHangXe: {
        type: String,
        require: true
    }
})
module.exports = mongoose.model('HangXe',hangxeSchema)