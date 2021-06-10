import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";


class CarItemsContent extends Component {
    render() {
        var { Xe, match, index } = this.props;
        return (
          
          <Link to={`Danhsachxe/${Xe._id}`} key={index}>
            <li>
            <img src={"http://localhost:3500/images/"+Xe.hinhAnh} alt="" style={{width: '100%'}} />
            <div className="car-card-details-wrapper">
              <div className="car-card-details">
                <h3>{Xe.TenXe}</h3>
                <p className="car-card-price">{Xe.Gia}</p>
              </div>
            </div>
            </li>
          </Link>
        );
    }
}

export default CarItemsContent;