const express = require('express')
const router = express.Router()
const ThueXe = require('../models/ThueXeModel')
const uuid = require("uuid");

//Lấy ID
async function getThueXe(req,res,next){
    let thuexe
    try {
        thuexe = await ThueXe.findById(req.params.id)
        if(thuexe == null){
            return res.status(404).json({message:'Cannot find thuexe'})
        }
    } catch (err) {
        res.status(500).json({message: err.message})
    }
    res.thuexe = thuexe
    next()
}

//Tạo
router.post('/', async (req,res) => {
    const thuexe = new ThueXe({
        _id: uuid.v4(),
        idTaiKhoan: req.body.idTaiKhoan,
        idXe: req.body.idXe,
        idTaiXe: req.body.idTaiXe,
        timeBatDau: req.body.timeBatDau,
        timeKetThuc: req.body.timeKetThuc,
        diemRuoc: req.body.diemRuoc,
        tinhTrang: req.body.tinhTrang,
    })
    try {
        const newThueXe = await thuexe.save()
        res.status(201).json(newThueXe)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

//Xem all
router.get('/', async (req,res) => {
    try {
        const thuexes = await ThueXe.find()
        res.json(thuexes)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

//Xem theo id
router.get('/:id',getThueXe,async (req,res) => {   
    res.send(res.thuexe)
})

//Sua theo id
router.patch('/:id',getThueXe, async (req,res) => {
    if(req.body.idTaiKhoan != null){
        res.xe.idTaiKhoan = req.body.idTaiKhoan       
    }
    if(req.body.idXe != null){
        res.xe.idXe = req.body.idXe       
    }
    if(req.body.idTaiXe != null){
        res.xe.idTaiXe = req.body.idTaiXe     
    }
    if(req.body.timeBatDau != null){
        res.xe.timeBatDau = req.body.timeBatDau       
    }
    if(req.body.timeKetThuc != null){
        res.xe.timeKetThuc = req.body.timeKetThuc       
    }
    if(req.body.diemRuoc != null){
        res.xe.diemRuoc = req.body.diemRuoc       
    }
    if(req.body.tinhTrang != null){
        res.xe.tinhTrang = req.body.tinhTrang       
    }
    try {
        const updatedthuexe = await res.thuexe.save()
        res.json(updatedthuexe)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

//Xoa theo id
router.delete('/:id',getThueXe,async (req,res) => {
    try {
        await res.thuexe.remove()
        res.json({message:'Deleted thuexe'})
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

module.exports = router