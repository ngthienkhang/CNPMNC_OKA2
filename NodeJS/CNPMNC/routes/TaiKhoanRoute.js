const express = require('express')
const router = express.Router()
const TaiKhoan = require('../models/TaiKhoanModel')
const uuid = require("uuid");
const bcrypt = require ('bcrypt')
const jwt = require('jsonwebtoken')
const config = require("../config/auth.config");
const singupChecker = require("../middlewares/verifySignUp");

//Lấy ID
async function getTaiKhoan(req,res,next){
    let taikhoan
    try {
        taikhoan = await TaiKhoan.findById(req.params.id)
        if(taikhoan == null){
            return res.status(404).json({message:'Cannot find taikhoan'})
        }
    } catch (err) {
        res.status(500).json({message: err.message})
    }
    res.taikhoan = taikhoan
    next()
}

//Tạo
router.post('/',singupChecker, async (req,res) => {
    const hashMatKhau = await bcrypt.hash(req.body.matKhau,5)
    const taikhoan = new TaiKhoan({
        _id: uuid.v4(),
        tenDangNhap: req.body.tenDangNhap,
        matKhau: hashMatKhau,
        avatar: req.body.avatar,
        email: req.body.email,
        sdt: req.body.sdt,
        cmnd: req.body.cmnd,
        maQuyen: req.body.matKhau
    })
    try {
        const newTaiKhoan = await taikhoan.save()
        res.status(201).json(newTaiKhoan)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

//Login
router.post('/login', (req,res) => {
    
    TaiKhoan.findOne({
        tenDangNhap: req.body.tenDangNhap
        })
    .populate( "-__v")
    .exec((err, taikhoan) => {
    if (err) {
        res.status(500).send({ message: err });
        return;
    }
    if (!taikhoan) {
        return res.status(404).send({ message: "User Not found." });
    }
    var passwordIsValid = bcrypt.compareSync(
        req.body.matKhau,
        taikhoan.matKhau
        );
    if (!passwordIsValid) {
        return res.status(401).send({
        accessToken: null,
        message: "Invalid Password!"
        });
    }
    var token = jwt.sign({ id: taikhoan.id }, config.secret, {
        expiresIn: 86400 // 24 hours
    });
    res.status(200).send({
        id: taikhoan._id,
        tenDangNhap: taikhoan.tenDangNhap,
        email: taikhoan.email,
        maQuyen: taikhoan.maQuyen,
        accessToken: token
        });
    });
})


//Xem all
router.get('/', async (req,res) => {
    try {
        const taikhoans = await TaiKhoan.find()
        res.json(taikhoans)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

//Xem theo id
router.get('/:id',getTaiKhoan,async (req,res) => {   
    res.send(res.taikhoan)
})

//Sua theo id
router.patch('/:id',getTaiKhoan,singupChecker, async (req,res) => {
    const hashMatKhau = await bcrypt.hash(req.body.matKhau,5)
    if(req.body.tenDangNhap != null){
        res.taikhoan.tenDangNhap = req.body.tenDangNhap       
    }
    if(req.body.matKhau != null){
        res.taikhoan.matKhau = hashMatKhau     
    }
    if(req.body.sdt != null){
        res.taikhoan.sdt = req.body.sdt       
    }
    if(req.body.cmnd != null){
        res.taikhoan.cmnd = req.body.cmnd       
    }
    try {
        const updatedtaikhoan = await res.taikhoan.save()
        res.json(updatedtaikhoan)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

//Xoa theo id
router.delete('/:id',getTaiKhoan,async (req,res) => {
    try {
        await res.taikhoan.remove()
        res.json({message:'Deleted taikhoan'})
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

router.post('/login',getTaiKhoan,async (req,res) => {
    try {

    } catch (err) {

    }
})

module.exports = router