const mongoose = require('mongoose')

const taikhoanSchema = new mongoose.Schema({
    _id: {
        type: String,
        require: true
    },
    tenDangNhap: {
        type: String,
        require: true
    },
    matKhau: {
        type: String,
        require: true
    },
    avatar: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    sdt: {
        type: Number,
        require: true
    },
    cmnd: {
        type: Number,
        require: true
    },
    maQuyen: {
        type: String,
        require: true
    }
})
module.exports = mongoose.model('TaiKhoan',taikhoanSchema)