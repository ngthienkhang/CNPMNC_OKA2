const express = require('express')
const router = express.Router()
const HangXe = require('../models/HangXeModel')
const uuid = require("uuid");

//Lấy ID
async function getHangXe(req,res,next){
    let loaixe
    try {
        hangxe = await HangXe.findById(req.params.id)
        if(hangxe == null){
            return res.status(404).json({message:'Cannot find hangxe'})
        }
    } catch (err) {
        res.status(500).json({message: err.message})
    }
    res.hangxe = hangxe
    next()
}

//Tạo
router.post('/', async (req,res) => {
    const hangxe = new HangXe({
        _id: uuid.v4(),
        tenHangXe: req.body.tenHangXe,
    })
    try {
        const newHangXe = await hangxe.save()
        res.status(201).json(newHangXe)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

//Xem all
router.get('/', async (req,res) => {
    try {
        const hangxes = await HangXe.find()
        res.json(hangxes)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

//Xem theo id
router.get('/:id',getHangXe,async (req,res) => {   
    res.send(res.hangxe)
})

//Sua theo id
router.patch('/:id',getHangXe, async (req,res) => {
    if(req.body.tenHangXe != null){
        res.loaixe.tenHangXe = req.body.tenHangXe       
    }
    try {
        const updatedhangxe = await res.hangxe.save()
        res.json(updatedhangxe)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})
//Xoa theo id
router.delete('/:id',getHangXe,async (req,res) => {
    try {
        await res.hangxe.remove()
        res.json({message:'Deleted hangxe'})
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

module.exports = router