const TaiKhoan = require('../models/TaiKhoanModel')

checkDuplicateUsernameOrEmail = (req, res, next) => {
    // Username
    TaiKhoan.findOne({
      tenDangNhap: req.body.tenDangNhap
    }).exec((err, taikhoan) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      if (taikhoan) {
        res.status(400).send({ message: "Failed! Username is already in use!" });
        return;
      }
      // Email
      TaiKhoan.findOne({
        email: req.body.email
      }).exec((err, taikhoan) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
        if (taikhoan) {
          res.status(400).send({ message: "Failed! Email is already in use!" });
          return;
        }
        next();
      });
    });
  };

module.exports = checkDuplicateUsernameOrEmail;