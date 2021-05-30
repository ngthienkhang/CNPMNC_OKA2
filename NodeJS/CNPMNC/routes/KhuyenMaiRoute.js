const express = require('express')
const router = express.Router()
const KhuyenMai = require('../models/KhuyenMaiModel')
const uuid = require("uuid");

//Lấy ID
async function getKhuyenMai(req,res,next){
    let khuyenmai
    try {
        khuyenmai = await KhuyenMai.findById(req.params.id)
        if(khuyenmai == null){
            return res.status(404).json({message:'Cannot find khuyenmai'})
        }
    } catch (err) {
        res.status(500).json({message: err.message})
    }
    res.khuyenmai = khuyenmai
    next()
}

//Tạo
router.post('/', async (req,res) => {
    const khuyenmai = new KhuyenMai({
        _id: uuid.v4(),
        tenKhuyenMai: req.body.tenKhuyenMai,
        giaTri: req.body.giaTri,
        ngayBatDau: req.body.ngayBatDau,
        ngayKetThuc: req.body.ngayKetThuc,
    })
    try {
        const newKhuyenMai = await khuyenmai.save()
        res.status(201).json(newKhuyenMai)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

//Xem all
router.get('/', async (req,res) => {
    try {
        const khuyenmais = await KhuyenMai.find()
        res.json(khuyenmais)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

//Xem theo id
router.get('/:id',getKhuyenMai,(req,res) => {
    res.send(res.khuyenmai.tenKhuyenMai)
})

//Sua theo id
router.patch('/:id',getKhuyenMai, async (req,res) => {
    if(req.body.tenKhuyenMai != null){
        res.khuyenmai.tenKhuyenMai = req.body.tenKhuyenMai       
    }
    if(req.body.giaTri != null){
        res.khuyenmai.giaTri = req.body.giaTri       
    }
    if(req.body.ngayBatDau != null){
        res.khuyenmai.ngayBatDau = req.body.ngayKetThuc       
    }
    if(req.body.ngayKetThuc != null){
        res.khuyenmai.ngayKetThuc = req.body.ngayKetThuc       
    }
    try {
        const updatedkhuyenmai = await res.khuyenmai.save()
        res.json(updatedkhuyenmai)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})


//Xoa theo id
router.delete('/:id',getKhuyenMai,async (req,res) => {
    try {
        await res.khuyenmai.remove()
        res.json({message:'Deleted khuyenmai'})
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})



module.exports = router
