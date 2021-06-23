import React, { Component } from 'react';
import callApi from '../../utils/apiCaller';

class profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
          "user" : {}
        }
      }

      loadDataProfile = () =>{
        callApi('taikhoan',{
        "tenDangNhap": this.state.tenDangNhap,
        "matKhau": this.state.matKhau,
        "avatar": this.state.avatar,
        "email": this.state.email,
        "sdt": this.state.sdt,
        "cmnd": this.state.cmnd,
        "maQuyen": this.state.maQuyen,
        })
        .then
      }

      logout = () => {
        localStorage.removeItem("accessToken")
        alert("đã đăng xuất")
      }
      
    render() {
        return (
            <div>
                <div>email: {this.state.email}</div>
                <div>số điện thoại: {this.state.sdt}</div>
                <div>chứng minh nhân dân: {this.state.cmnd}</div>
                <div>quyền: {this.state.maQuyen}</div>
                <button type="button" onClick={this.logout}>Logout</button>
            </div>
        );
    }
}

export default profile;