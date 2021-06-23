import React, { Component } from 'react';

class Dk extends Component {
    render() {
        return (
            <div>
                <section>
  <div className="container">
    <div className="form-tt">
      <h1>Đăng kí</h1>
      <form action="#" method="post" name="dang-ky">
        <input type="text" name="username" placeholder="Nhập tên đăng ký" />
        <input type="password" name="password" placeholder="Nhập mật khẩu" />
        <input type="password" name="password" placeholder="Xác nhận mật khẩu" />
        <input type="checkbox" id="checkbox" name="checkbox" /><label className="checkbox-text">Nhớ đăng nhập lần sau</label>
        <input type="submit" name="submit" defaultValue="Đăng nhập"/>
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

export default Dk;