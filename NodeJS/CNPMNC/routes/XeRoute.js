const express = require('express')
const router = express.Router()
const Xe = require('../models/XeModel')
const uuid = require("uuid");

var multer  = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './images/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()  + "-" + file.originalname)
    }
});  
var upload = multer({ 
    storage: storage,
    fileFilter: function (req, file, cb) {
        console.log(file);
        if(file.mimetype=="image/bmp" || file.mimetype=="image/png"|| file.mimetype=="image/jpeg"|| file.mimetype=="image/jpg"|| file.mimetype=="image/gif"){
            cb(null, true)
        }else{
            return cb(new Error('Only image are allowed!'))
        }
    }
});


//Lấy ID
async function getXe(req,res,next){
    let xe
    try {
        xe = await Xe.findById(req.params.id)
        if(xe == null){
            return res.status(404).json({message:'Cannot find xe'})
        }
    } catch (err) {
        res.status(500).json({message: err.message})
    }
    res.xe = xe
    next()
}

//Tạo
router.post('/', upload.single("hinhAnh"), async (req,res) => {
    const xe = new Xe({
        _id: uuid.v4(),
        TenXe: req.body.TenXe,
        IDTaiKhoan: req.body.IDTaiKhoan,
        IDHangXe: req.body.IDHangXe,
        IDLoaiXe: req.body.IDLoaiXe,
        hinhAnh: req.file ? req.file.filename : "",
        BienSo: req.body.Gia,
        Gia: req.body.Gia,
        TinhTrang: req.body.TinhTrang,
    })
    try {
        const newXe = await xe.save()
        res.status(201).json(newXe)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

//Xem all
router.get('/', async (req,res) => {
    try {
        const xes = await Xe.find()
        res.json(xes)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

//Xem theo id
router.get('/:id',getXe,async (req,res) => {   
    res.send(res.xe)
})

//Sua theo id
router.patch('/:id',upload.single("hinhAnh"),getXe, async (req,res) => {
    if(req.body.TenXe != null){
        res.xe.TenXe = req.body.TenXe       
    }
    if(req.body.IDTaiKhoan != null){
        res.xe.IDTaiKhoan = req.body.IDTaiKhoan       
    }
    if(req.body.IDHangXe != null){
        res.xe.IDHangXe = req.body.IDHangXe     
    }
    if(req.body.IDLoaiXe != null){
        res.xe.IDLoaiXe = req.body.IDLoaiXe       
    }
    if( req.file){
        res.xe.hinhAnh =  req.file ? req.file.filename : ""
    }
    if(req.body.BienSo != null){
        res.xe.Gia = req.body.Gia       
    }
    if(req.body.Gia != null){
        res.xe.Gia = req.body.Gia       
    }
    if(req.body.TinhTrang != null){
        res.xe.TinhTrang = req.body.TinhTrang       
    }
    try {
        const updatedxe = await res.xe.save()
        res.json(updatedxe)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

//Xoa theo id
router.delete('/:id',getXe,async (req,res) => {
    try {
        await res.xe.remove()
        res.json({message:'Deleted xe'})
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

module.exports = router