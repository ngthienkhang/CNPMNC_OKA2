const mongoose = require('mongoose')

const thuexeSchema = new mongoose.Schema({
    _id: {
        type: String,
        require: true
    },
    idTaiKhoan:{
        type: String,
        require: true
    },
    idXe:{
        type: String,
        require: true
    },
    idTaiXe:{
        type: String,
        require: true
    },
    timeBatDau: {
        type: Date,
        require: true
    },
    timeKetThuc:{
        type: Date,
        require: true
    },
    diemRuoc:{
        type: String,
        require: true
    },
    tinhTrang:{
        type: String,
        require: true
    }
})

module.exports = mongoose.model('ThueXe',thuexeSchema)