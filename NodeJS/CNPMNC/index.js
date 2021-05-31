require('dotenv').config()

const express = require('express')
const app = express()

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true},);
const db = mongoose.connection
db.on('error',(error) => console.error(error))
db.once('open',() => console.log('Connected to Database'))

app.use(express.json())

app.use("/images", express.static("images"));

const KhuyenMaiRouter = require('./routes/KhuyenMaiRoute')
app.use('/khuyenmai',KhuyenMaiRouter)

const TaiXeRouter = require('./routes/TaiXeRoute')
app.use('/taixe',TaiXeRouter)

const LoaiXeRouter = require('./routes/LoaiXeRoute')
app.use('/loaixe',LoaiXeRouter)

const HangXeRouter = require('./routes/HangXeRoute')
app.use('/hangxe',HangXeRouter)

const XeRouter = require('./routes/XeRoute')
app.use('/xe',XeRouter)

const TaiKhoanRouter = require('./routes/TaiKhoanRoute')
app.use('/taikhoan',TaiKhoanRouter)

const ThueXeRouter = require('./routes/ThueXeRoute')
app.use('/thuexe',ThueXeRouter)

const HoaDonRouter = require('./routes/HoaDonRoute')
app.use('/hoadon',HoaDonRouter)

app.listen(3500,() => console.log("Server started"))
