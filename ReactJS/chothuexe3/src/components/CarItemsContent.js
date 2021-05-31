import React, { Component } from 'react';



class CarItemsContent extends Component {
    render() {
        var { Xe, index} = this.props;
        return (
          <li>
          <a href>
            <img src={"http://localhost:3500/images/"+Xe.hinhAnh} alt="" />
            <div className="car-card-details-wrapper">
              <div className="car-card-details">
                <h3>{Xe.TenXe}</h3>
                <p className="car-card-price">{Xe.Gia}</p>
              </div>
            </div>
          </a>
        </li>
        );
    }
}

export default CarItemsContent;