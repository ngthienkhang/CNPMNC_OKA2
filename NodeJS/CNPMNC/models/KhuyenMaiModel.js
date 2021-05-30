const mongoose = require('mongoose')

const khuyenmaiSchema = new mongoose.Schema({
    _id: {
        type: String,
        require: true
    },
    tenKhuyenMai: {
        type: String,
        require: true
    },
    giaTri:{
        type: Number,
        require: true
    },
    ngayBatDau:{
        type: Date,
        require: true
    },
    ngayKetThuc:{
        type: Date,
        require: true
    }
})

module.exports = mongoose.model('KhuyenMai',khuyenmaiSchema)

