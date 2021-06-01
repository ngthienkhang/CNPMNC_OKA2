const mongoose = require('mongoose')

const taixeSchema = new mongoose.Schema({
    _id: {
        type: String,
        require: true
    },
    IDTaiKhoan:{
        type: String,
        require: true
    },
    tenTaiXe: {
        type: String,
        require: true
    },
    avatar: {
        type: String,
        require: true
    },
    SDT:{
        type: Number,
        require: true
    },
    CMND:{
        type: Number,
        require: true
    },
    tinhTrang:{
        type: String,
        require: true
    },
})

module.exports = mongoose.model('TaiXe',taixeSchema)
