import React, { Component } from 'react';
import callApi from '../utils/apiCaller';


class DetailXe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Xe: [],
    };
  }

  componentDidMount() {
    callApi('Xe', 'GET', null).then(res => {
      this.setState({
        Xe: res.data
      })
    });
  }

  render() {
    var { Xe} = this.state;
    var { match } = this.props;
    var TenXes = match.params.TenXe;
    console.log(TenXes);
    console.log(Xe)
    return (
      <div>
        {
          Xe.map((Xe) => {
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
                              <td>{Xe.TenXe}</td>
                            </tr>
                            <tr>
                              <td>Tài Sản Thế Chấp</td>
                              <td>{Xe.TheChap}</td>
                            </tr>
                            <tr>
                              <td>Hãng xe</td>
                              <td>{Xe.IDHangXe}</td>
                            </tr>
                            <tr>
                              <td>Chủ xe</td>
                              <td>{Xe.IDTaiKhoan}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="decription-car">
                      <h4>MÔ TẢ XE</h4>
                      <div className="group">
                        <p>{Xe.TinhNang}</p>
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