import React, { Component } from 'react';
import callApi from '../../utils/apiCaller';
class Dn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      "username": "",
      "password": ""
    }
  }

  setParams = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  login = () => {

    callApi('taikhoan/login', 'POST',{
      tenDangNhap: this.state.username,
      matKhau: this.state.password
    })
    .then(function (response) {
      console.log(response)
      const data = response.data
      if(response.ok){
        return response.json()
      }
      localStorage.setItem('accessToken', data.accessToken)
      alert("Đăng nhập thành công")
    })
  }
  render() {
    return (
      <div>
        <section>
          <div className="container">
            <div className="form-tt">
              <h1>Đăng nhập</h1>
              <form action="#" method="post" name="dang-ky">
                <input type="text" name="username" placeholder="Nhập tên đăng ký" onChange={this.setParams} />
                <input type="password" name="password" placeholder="Nhập mật khẩu" onChange={this.setParams} />
                <input type="checkbox" id="checkbox" name="checkbox" /><label className="checkbox-text">Nhớ đăng nhập lần sau</label>
                <button type="button" onClick={this.login}>Đăng nhâp</button>
                <label className="psw-text">Quên mật khẩu</label>
              </form>
            </div>
          </div>
        </section>
        {/* end form dangki */}

      </div>
    );
  }
}

export default Dn;