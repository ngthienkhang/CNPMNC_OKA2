import React, { Component } from 'react';
import CarItemsContent from './CarItemsContent';

class Danhsachxe extends Component {
    render() {
        return (
            <div>
                <div className="container">
  <div className="sidebar">
    <div className="block filter">
      <div className="filter-options">
        <div className="filter-options-items">
          <div className="filter-options-title">
            <h4>DANH MỤC</h4>
          </div>
          <div className="filter-options-content">
            <ul>
              <li>
                <input type="checkbox" />    Xe 4 chỗ
              </li>
              <li>
                <input type="checkbox" />    Xe 8 chỗ
              </li>
              <li>
                <input type="checkbox" />    Xe 16 chỗ
              </li>
              <li>
                <input type="checkbox" />    Xe 32 chỗ
              </li>
            </ul>
          </div>
          <div className="filter-options-title">
            <h4>Hãng xe</h4>
          </div>
          <div className="filter-options-content">
            <ul>
              <li>
                <input type="checkbox" />    Toyota
              </li>
              <li>
                <input type="checkbox" />    Honda
              </li>
              <li>
                <input type="checkbox" />    Thành Bưởi
              </li>
              <li>
                <input type="checkbox" />    Phương Trang
              </li>
            </ul>
          </div>
          <button type="submit" className="btn btn-light loc">Lọc</button>
        </div>
      </div>
    </div>
  </div>
  {/* end sidebar */}
  <div className="main">
    <div className="listcars">
      <div className="listcars-items">
        <div className="listcars-items-title">
          <h4>Xe sẵn sàng</h4>
        </div>
        <CarItemsContent></CarItemsContent>
      </div>
    </div>
  </div>
  {/* end main */}
</div>
{/* end listcars */}

            </div>
        );
    }
}

export default Danhsachxe;