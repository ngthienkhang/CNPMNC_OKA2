const express = require('express')
const router = express.Router()
const TaiKhoan = require('../models/TaiKhoanModel')
const uuid = require("uuid");

//Lấy ID
async function getTaiKhoan(req,res,next){
    let taikhoan
    try {
        taikhoan = await TaiKhoan.findById(req.params.id)
        if(taikhoan == null){
            return res.status(404).json({message:'Cannot find xe'})
        }
    } catch (err) {
        res.status(500).json({message: err.message})
    }
    res.taikhoan = taikhoan
    next()
}

//Tạo
router.post('/', async (req,res) => {
    const taikhoan = new TaiKhoan({
        _id: uuid.v4(),
        tenDangNhap: req.body.tenDangNhap,
        matKhau: req.body.matKhau,
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
router.patch('/:id',getTaiKhoan, async (req,res) => {
    if(req.body.tenDangNhap != null){
        res.taikhoan.tenDangNhap = req.body.tenDangNhap       
    }
    if(req.body.matKhau != null){
        res.taikhoan.matKhau = req.body.matKhau      
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