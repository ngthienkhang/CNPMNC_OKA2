import React, { Component } from 'react';
import callApi from '../utils/apiCaller';
import Chuxe from './Chuxe';


class DetailXe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Xe: [],
      Taikhoan: [],
    };
  }

  componentDidMount() {
    callApi('Xe', 'GET', null).then(res => {
      this.setState({
        Xe: res.data
      })
    });
    callApi('taikhoan', 'GET', null).then(res => {
      this.setState({
        Taikhoan: res.data
      })
    });
  }

  render() {
    var { Xe, Taikhoan } = this.state;
    var { match } = this.props;
    var TenXes = match.params.TenXe;
    var Taikhoans = match.IDTaiKhoan;
    console.log(TenXes);
    console.log(Xe)
    return (
      <div>
        {
          Xe.map((Xe, index, match) => {
            if (Xe.TenXe === TenXes) {

              return (
                <div className="container">
                  <div className="sidebar">
                    <div className="sidebar-image">
                      <img src={"http://localhost:3500/images/" + Xe.hinhAnh} alt="" />
                    </div>
                    <div className="sidebar-item">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <span className="form-label">Ngày đi</span>
                            <input className="form-control" type="date" required />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <span className="form-label">Ngày về</span>
                            <input className="form-control" type="date" required />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3" />
                        <div className="col-md-6">
                          <div className="form-btn">
                            <button className="submit-btn">Đặt xe</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="main">
                    <div className="main-title">
                      <h1>
                        {Xe.TenXe}
                      </h1>
                    </div>
                    <div className="main-price">
                      <h3>{Xe.Gia} / Ngày</h3>
                    </div>
                    <div className="detailxe">
                      <h4>THÔNG TIN CHI TIẾT</h4>
                      <div className="group">
                        <table>
                          <tbody>
                            <tr>
                              <td>Hãng Xe</td>
                              <td>HONDA</td>
                            </tr>
                            <tr>
                              <td>Tính Năng</td>
                              <td>Bản đồ, Bluetooth, Camera lùi, khe USB</td>
                            </tr>
                            <tr>
                              <td>Tài Sản Thế Chấp</td>
                              <td>15tr(chuyển khoản/tiền mặt)</td>
                            </tr>

                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="decription-car">
                      <h4>MÔ TẢ XE</h4>
                      <div className="group">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur voluptatum corporis porro eius, expedita reiciendis temporibus, minima quam dolorem animi minus aliquid voluptate officia exercitationem cupiditate quibusdam perspiciatis ipsum eos cum soluta adipisci. Velit accusantium consequatur perspiciatis, deserunt est sapiente provident impedit ea, aperiam quasi vel architecto sequi aut suscipit unde molestias tempore eos blanditiis ipsa? Culpa vitae, quasi natus unde vero ratione sed qui nam similique, minima maxime sit praesentium architecto tempore eum ducimus, quisquam ipsa! Quam sapiente ipsa praesentium sint quas, commodi ipsam suscipit repudiandae veritatis, non blanditiis quo deserunt. Laudantium cumque exercitationem numquam, fugit, expedita officiis nam dicta iste culpa, saepe sit quis tempore. Eum, exercitationem, atque sunt id asperiores voluptatibus ipsa, laudantium adipisci laboriosam suscipit alias? Exercitationem consequuntur eum, magnam sequi quos illo eveniet iure esse non. Dolores doloremque aut placeat maiores nihil sed rem, quibusdam, iste commodi repudiandae nemo accusantium. Voluptates commodi adipisci doloribus fuga esse rerum ea, dicta voluptatum quibusdam suscipit et! Incidunt tempore doloremque eveniet quis nobis esse cupiditate consequuntur architecto, quaerat voluptate cumque commodi quos, magni voluptatem ipsam a eum fugiat ipsum exercitationem eius sit veniam, possimus numquam. Similique alias explicabo, consequuntur nulla odio sed mollitia temporibus fuga omnis possimus incidunt molestias!</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
            return '';
          })
        }
      </div>
    );
  }
}


  export default DetailXe;