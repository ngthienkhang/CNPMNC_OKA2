import React, { Component } from 'react';

class Chuxe extends Component {
    render() {
        var { Taikhoan } = this.props;
        return (
            <div>
                <tr>
                      <td>Chủ Xe</td>
                      <td>{Taikhoan.tenDangNhap}</td>
                </tr>
            </div>
        );
    }
}

export default Chuxe;