import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import callApi from '../../utils/apiCaller';

class AdminAddqlxe extends Component {
    constructor(props){
        super(props);
        this.state = {
            id : '', 
            txtTenXe: '', 
            txtBienSo: '',
            txtGia: '',
            txtHangXe: '',
            txtTinhNang: '',
            txtTaiSan: '',
            txtChuXe: '',
            chkbStatus: '',
            images: '',
        }
    }

    componentDidMount(){
      var {match} = this.props; 
      if(match){
        var id = match.params.id;
        callApi(`Xe/${id}`, 'GET', null).then(res =>{
          var data = res.data;
          this.setState({
            id: data.id,
            txtTenXe: data.TenXe,
            txtBienSo: data.BienSo, 
            txtGia: data.Gia,
            txtHangXe: data.HangXe,
            txtTinhNang: data.TinhNang,
            txtTaiSan: data.TaiSan,
            txtChuXe: data.ChuXe,
            chkbStatus: data.TinhTrang,
            images: data.hinhAnh,
          });
        })
      }
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
     }

     onSave = (e) => {
         e.preventDefault();
         var {id, txtTenXe, txtBienSo, txtGia, txtHangXe, txtTinhNang, txtTaiSan, txtChuXe, chkbStatus, images} = this.state;
         var {history} = this.props;
        if(id){
          console.log('updating...')
        }else{
              callApi('Xe', 'POST', {
                  TenXe: txtTenXe,
                  BienSo: txtBienSo,
                  Gia: txtGia,
                  TinhTrang: chkbStatus,
                  hinhAnh: images,
              }).then(res =>{
                  history.goBack();
              })
        }
     }
    render() {
        var { txtTenXe, txtBienSo, txtGia, txtHangXe, txtTinhNang, txtTaiSan, txtChuXe, chkbStatus, images} = this.state;
        return (
            <div className="main-addxe">
                  <form onSubmit={this.onSave}>
  <div className="addxe-items">
    <h4>Tên xe:</h4>
    <input type="text" placeholder="Nhập tên xe" name="txtTenXe" value={txtTenXe} onChange={this.onChange}/>
  </div>
  <div className="addxe-items">
    <h4>Biển số:</h4>
    <input type="text" placeholder="Nhập biển số xe" name="txtBienSo" value={txtBienSo} onChange={this.onChange}/>
  </div>
  <div className="addxe-items">
    <h4>Giá:</h4>
    <input type="text" placeholder="Nhập giá xe" name="txtGia" value={txtGia} onChange={this.onChange}/>
  </div>
  <div className="addxe-items">
    <h4>Hãng xe:</h4>
    <input type="text" placeholder="Nhập hãng xe" name="txtHangXe" value={txtHangXe} onChange={this.onChange}/>
  </div>
  <div className="addxe-items">
    <h4>Tính năng:</h4>
    <input type="text" placeholder="Nhập tính năng" name="txtTinhNang" value={txtTinhNang} onChange={this.onChange}/>
  </div>
  <div className="addxe-items">
    <h4>Tài sản thế chấp:</h4>
    <input type="text" placeholder="Nhập tài sản thế chấp" name="txtTaiSan" value={txtTaiSan} onChange={this.onChange}/>
  </div>
  <div className="addxe-items">
    <h4>Chủ xe:</h4>
    <input type="text" placeholder="Nhập chủ xe" name="txtChuXe" value={txtChuXe} onChange={this.onChange}/>
  </div>
  <div className="addxe-items">
    <h4>Hình ảnh:</h4>
    <form action>
      <input type="file" name="images" value={images} onChange={this.onChange}/>
    </form>
  </div>
  <div className="addxe-items-checkbox">
    <h4>Tình trạng:</h4>
      <input type="checkbox" style={{width: 'auto'}} name="chkbStatus" value={chkbStatus} onChange={this.onChange}/>Còn cho thuê
  </div>
  <Link to="/Admin" className="btn btn-danger back-car">Quay lại</Link>
  <button className="btn btn-danger add-car">Lưu</button>
  </form>
</div>


        );
    }
}

export default AdminAddqlxe;