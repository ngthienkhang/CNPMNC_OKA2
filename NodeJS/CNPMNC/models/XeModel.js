const mongoose = require('mongoose')

const xeSchema = new mongoose.Schema({
    _id: {
        type: String,
        require: true
    },
    TenXe:{
        type: String,
        require: true
    },
    IDTaiKhoan:{
        type: String,
        require: true
    },
    IDHangXe:{
        type: String,
        require: true
    },
    IDLoaiXe:{
        type: String,
        require: true
    },
    hinhAnh: {
        type: String,
        require: true
    },
    BienSo:{
        type: String,
        require: true
    },
    Gia:{
        type: Number,
        require: true
    },
    TinhTrang:{
        type: String,
        require: true
    },
})

module.exports = mongoose.model('Xe',xeSchema)