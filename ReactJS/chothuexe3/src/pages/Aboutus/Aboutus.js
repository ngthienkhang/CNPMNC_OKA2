import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route
} from "react-router-dom";
import AboutUs from '../../components/AboutUs';
import CachDangKi from '../../components/CachDangKi';
import LoiIchChuXe from '../../components/LoiIchChuXe';
import LoiIchThueXe from '../../components/LoiIchThueXe';
import QuyTrinhChoThue from '../../components/QuyTrinhChoThue';
import QuyTrinhThueXe from '../../components/QuyTrinhThueXe';
import TinhNang from '../../components/TinhNang';


class Aboutus extends Component {
    render() {
        return (
            <div>
                <div className="container">
  <div className="sidebar">
    <div className="block filter">
      <div className="filter-options">
        <div className="filter-options-items">
          <div className="filter-options-title" style={{borderTop: '5px solid #eee'}}>
            <Link to="/Aboutus"><h4>Giới thiệu về TRAVELUKA</h4></Link>
          </div>
          <div className="filter-options-title">
            <Link to="/Aboutus/TinhNang"><h4>Tính năng nổi bật</h4></Link>
          </div>
          <div className="filter-options-title">
            <Link to="/Aboutus/LoiIchThueXe"><h4>Lợi ích thuê xe tự lái</h4></Link>
          </div>
          <div className="filter-options-title">
            <Link to="/Aboutus/LoiIchChuXe"><h4>Lợi ích chủ xe</h4></Link>
          </div>
          <div className="filter-options-title">
            <Link to="/Aboutus/CachDangKi"><h4>Cách đăng kí xe cho thuê</h4></Link>
          </div>
          <div className="filter-options-title">
            <Link to="/Aboutus/QuyTrinhThueXe"><h4>Quy trình thuê xe tự lái</h4></Link>
          </div>
          <div className="filter-options-title">
            <Link to="/Aboutus/QuyTrinhChoThue"><h4>Quy trình cho thuê xe tự lái</h4></Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end sidebar */}
  <div className="main">
  <Route exact path="/Aboutus">
      <AboutUs/>
      </Route>
      <Route exact path="/Aboutus/TinhNang">
        <TinhNang/>
      </Route>
      <Route exact path="/Aboutus/LoiIchThueXe">
        <LoiIchThueXe/>
      </Route>
      <Route exact path="/Aboutus/LoiIchChuXe">
        <LoiIchChuXe/>
      </Route>
      <Route exact path="/Aboutus/CachDangKi">
        <CachDangKi/>
      </Route>
      <Route exact path="/Aboutus/QuyTrinhThueXe">
        <QuyTrinhThueXe/>
      </Route>
      <Route exact path="/Aboutus/QuyTrinhChoThue">
        <QuyTrinhChoThue/>
      </Route>
  </div>
</div>
{/* end about us */}



            </div>
        );
    }
}

export default Aboutus;