import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <div>
                <div id="wrapper">
                    <div id="header">
                        <div className="container justify-content-between">
                            <Link to="/" className="logo" style={{ color: '#fff', textDecoration: 'none' }}>
                                <h1>TRAVELUKA<i className="fas fa-car" /></h1>
                                </Link>
                            <nav className="d-flex">
                                <ul id="main-menu" className="d-flex" style={{ margin: '0px' }}>
                                    <li><Link to="/Danhsachxe">DỊCH VỤ THUÊ XE</Link></li>
                                    <li><Link to="/Lienhe">LIÊN HỆ</Link></li>
                                    <li><Link to="/Aboutus">VỀ CHÚNG TÔI</Link></li>
                                </ul>
                                <Link to="/Dangnhap" style={{ textDecoration: 'none' }}><button>Đăng nhập</button></Link>
                                <Link to="/Dangki" style={{ textDecoration: 'none' }}><button>Đăng kí</button></Link>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;