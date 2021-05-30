const express = require('express')
const router = express.Router()
const LoaiXe = require('../models/LoaiXeModel')
const uuid = require("uuid");

//Lấy ID
async function getLoaiXe(req,res,next){
    let loaixe
    try {
        loaixe = await LoaiXe.findById(req.params.id)
        if(loaixe == null){
            return res.status(404).json({message:'Cannot find loaixe'})
        }
    } catch (err) {
        res.status(500).json({message: err.message})
    }
    res.loaixe = loaixe
    next()
}

//Tạo
router.post('/', async (req,res) => {
    const loaixe = new LoaiXe({
        _id: uuid.v4(),
        tenLoaiXe: req.body.tenLoaiXe,
    })
    try {
        const newLoaiXe = await loaixe.save()
        res.status(201).json(newLoaiXe)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

//Xem all
router.get('/', async (req,res) => {
    try {
        const loaixes = await LoaiXe.find()
        res.json(loaixes)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

//Xem theo id
router.get('/:id',getLoaiXe,async (req,res) => {   
    res.send(res.taixe)
})

//Sua theo id
router.patch('/:id',getLoaiXe, async (req,res) => {
    if(req.body.tenLoaiXe != null){
        res.loaixe.tenLoaiXe = req.body.tenLoaiXe       
    }
    try {
        const updatedloaixe = await res.loaixe.save()
        res.json(updatedloaixe)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

//Xoa theo id
router.delete('/:id',getLoaiXe,async (req,res) => {
    try {
        await res.loaixe.remove()
        res.json({message:'Deleted loaixe'})
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

module.exports = router