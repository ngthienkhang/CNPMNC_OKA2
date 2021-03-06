import React, { Component } from 'react';
import ReactImageUploadComponent from 'react-images-upload';
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
            txtTheChap: '',
            txtChuXe: '',
            chkbStatus: '',
            pictures: '',
        }
        this.onDrop = this.onDrop.bind(this);
    }

    componentDidMount(){
      var {match} = this.props; 
      if(match){
        var id = match.params.id;
        callApi(`Xe/${id}`, 'GET', null).then(res =>{
          var data = res.data;
          this.setState({
            id: data._id,
            txtHangXe: data.HangXe,
            txtTenXe: data.TenXe,
            txtBienSo: data.BienSo, 
            txtGia: data.Gia,
            txtHangXe: data.IDHangXe,
            txtTinhNang: data.TinhNang,
            txtTheChap: data.TheChap,
            txtChuXe: data.IDTaiKhoan,
            chkbStatus: data.TinhTrang,
            pictures: data.hinhAnh,
          });
        })
      }
    }

    onDrop(picture) {
      this.setState({
          pictures: this.state.pictures.concat(picture),
      });
      console.log(this.state.pictures.concat(picture))
  }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value,
        });
     }

     onSave = (e) => {
         e.preventDefault();
         var {id, txtTenXe, txtBienSo, txtGia, txtHangXe, txtTinhNang, txtTheChap, txtChuXe, chkbStatus, pictures} = this.state;
         var {history} = this.props;
        if(id !== ''){
          callApi(`Xe/${id}`, 'PATCH',{
                  IDTaiKhoan: txtChuXe,
                  IDHangXe: txtHangXe,
                  TenXe: txtTenXe,
                  BienSo: txtBienSo,
                  Gia: txtGia,
                  TinhTrang: chkbStatus,
                  hinhAnh: pictures,
                  TinhNang: txtTinhNang,
                  TheChap: txtTheChap,
          }).then(res =>{
            history.goBack();
            console.log(res.data.hinhAnh)
          })
        }else{
              callApi('Xe', 'POST', {
                  IDTaiKhoan: txtChuXe,
                  IDHangXe: txtHangXe,
                  TenXe: txtTenXe,
                  BienSo: txtBienSo,
                  Gia: txtGia,
                  TinhTrang: chkbStatus,
                  hinhAnh: pictures,
                  TinhNang: txtTinhNang,
                  TheChap: txtTheChap,
              }).then(res =>{
                  console.log(res.data)
                  history.goBack();
              })
        }
     }

    render() {
        var { txtTenXe, txtBienSo, txtGia, txtHangXe, txtTinhNang, txtTheChap, txtChuXe, chkbStatus, pictures} = this.state;
        return (
            <div className="main-addxe">
                  <form onSubmit={this.onSave}>
  <div className="addxe-items">
    <h4>T??n xe:</h4>
    <input type="text" placeholder="Nh???p t??n xe" name="txtTenXe" value={txtTenXe} onChange={this.onChange}/>
  </div>
  <div className="addxe-items">
    <h4>Bi???n s???:</h4>
    <input type="text" placeholder="Nh???p bi???n s??? xe" name="txtBienSo" value={txtBienSo} onChange={this.onChange}/>
  </div>
  <div className="addxe-items">
    <h4>Gi??:</h4>
    <input type="text" placeholder="Nh???p gi?? xe" name="txtGia" value={txtGia} onChange={this.onChange}/>
  </div>
  <div className="addxe-items">
    <h4>H??ng xe:</h4>
    <input type="text" placeholder="Nh???p h??ng xe" name="txtHangXe" value={txtHangXe} onChange={this.onChange}/>
  </div>
  <div className="addxe-items">
    <h4>T??nh n??ng:</h4>
    <input type="text" placeholder="Nh???p t??nh n??ng" name="txtTinhNang" value={txtTinhNang} onChange={this.onChange}/>
  </div>
  <div className="addxe-items">
    <h4>T??i s???n th??? ch???p:</h4>
    <input type="text" placeholder="Nh???p t??i s???n th??? ch???p" name="txtTheChap" value={txtTheChap} onChange={this.onChange}/>
  </div>
  <div className="addxe-items">
    <h4>Ch??? xe:</h4>
    <input type="text" placeholder="Nh???p ch??? xe" name="txtChuXe" value={txtChuXe} onChange={this.onChange}/>
  </div>
  <div className="addxe-items">
    <h4>H??nh ???nh:</h4>
    <form action>
    <ReactImageUploadComponent
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
    </form>
  </div>
  <Link to="/Admin" className="btn btn-danger back-car">Quay l???i</Link>
  <button className="btn btn-danger add-car">L??u</button>
  </form>
</div>


        );
    }
}

export default AdminAddqlxe;