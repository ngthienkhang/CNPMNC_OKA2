const express = require('express')
const router = express.Router()
const TaiXe = require('../models/TaiXeModel')
const uuid = require("uuid");


//Lấy ID
async function getTaiXe(req,res,next){
    let taixe
    try {
        taixe = await TaiXe.findById(req.params.id)
        if(taixe == null){
            return res.status(404).json({message:'Cannot find taixe'})
        }
    } catch (err) {
        res.status(500).json({message: err.message})
    }
    res.taixe = taixe
    next()
}

//Tạo
router.post('/', async (req,res) => {
    const taixe = new TaiXe({
        _id: uuid.v4(),
        IDTaiKhoan: req.body.IDTaiKhoan,
        tenTaiXe: req.body.tenTaiXe,
        avatar: req.body.avatar,
        SDT: req.body.SDT,
        CMND: req.body.CMND,
        tinhTrang: req.body.tinhTrang,
    })
    try {
        const newTaiXe = await taixe.save()
        res.status(201).json(newTaiXe)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

//Xem all
router.get('/', async (req,res) => {
    try {
        const taixes = await TaiXe.find()
        res.json(taixes)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

//Xem theo id
router.get('/:id',getTaiXe,async (req,res) => {   
    res.send(res.taixe)
})

//Sua theo id
router.patch('/:id',getTaiXe, async (req,res) => {
    if(req.body.IDTaiKhoan != null){
        res.taixe.IDTaiKhoan = req.body.IDTaiKhoan       
    }
    if(req.body.tenTaiXe != null){
        res.taixe.tenTaiXe = req.body.tenTaiXe      
    }
    if(req.body.avatar != null){
        res.taixe.avatar = req.body.avatar      
    }
    if(req.body.SDT != null){
        res.taixe.SDT = req.body.SDT       
    }
    if(req.body.CMND != null){
        res.taixe.CMND = req.body.CMND       
    }
    if(req.body.tinhTrang != null){
        res.taixe.tinhTrang = req.body.tinhTrang      
    }
    try {
        const updatedtaixe = await res.taixe.save()
        res.json(updatedtaixe)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

//Xoa theo id
router.delete('/:id',getTaiXe,async (req,res) => {
    try {
        await res.taixe.remove()
        res.json({message:'Deleted taixe'})
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

module.exports = router