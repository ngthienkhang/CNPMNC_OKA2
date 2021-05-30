const express = require('express')
const router = express.Router()
const HoaDon = require('../models/HoaDonModel')
const uuid = require("uuid");

//Lấy ID
async function getHoaDon(req,res,next){
    let HoaDon
    try {
        hoadon = await HoaDon.findById(req.params.id)
        if(hoadon == null){
            return res.status(404).json({message:'Cannot find hoadon'})
        }
    } catch (err) {
        res.status(500).json({message: err.message})
    }
    res.hoadon = hoadon
    next()
}

//Tạo
router.post('/', async (req,res) => {
    const hoadon = new ThueXe({
        _id: uuid.v4(),
        idThueXe: req.body.idThueXe,
        idKhuyenMai: req.body.idKhuyenMai,
        tongTien: req.body.tongTien,
    })
    try {
        const newHoaDon = await hoadon.save()
        res.status(201).json(newHoaDon)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

//Xem all
router.get('/', async (req,res) => {
    try {
        const hoaxes = await HoaDon.find()
        res.json(hoadons)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

//Xem theo id
router.get('/:id',getHoaDon,async (req,res) => {   
    res.send(res.hoadon)
})

//Sua theo id
router.patch('/:id',getHoaDon, async (req,res) => {
    if(req.body.idThueXe != null){
        res.xe.idThueXe = req.body.idThueXe       
    }
    if(req.body.idKhuyenMai != null){
        res.xe.idKhuyenMai = req.body.idKhuyenMai       
    }
    if(req.body.tongTien != null){
        res.xe.tongTien = req.body.tongTien     
    }
    try {
        const updatedhoadon = await res.hoadon.save()
        res.json(updatedhoadon)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

//Xoa theo id
router.delete('/:id',getHoaDon,async (req,res) => {
    try {
        await res.hoadon.remove()
        res.json({message:'Deleted hoa don'})
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

module.exports = router