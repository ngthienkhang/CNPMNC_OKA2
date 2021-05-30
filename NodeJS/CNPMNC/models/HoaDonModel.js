const mongoose = require('mongoose')

const hoadonSchema = new mongoose.Schema({
    _id: {
        type: String,
        require: true
    },
    idThueXe:{
        type: String,
        require: true
    },
    idKhuyenMai:{
        type: String,
        require: true
    },
    tongTien:{
        type: Number,
        require: true
    }
})

module.exports = mongoose.model('HoaDon',hoadonSchema)