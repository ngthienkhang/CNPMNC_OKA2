import React, { Component } from 'react';
import CarItemsContent from '../../components/CarItemsContent';
import DetailXe from '../../components/DetailXe';
import callApi from '../../utils/apiCaller';


class Danhsachxe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Xe: []
    };
    this.showXe = this.showXe.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

    componentDidMount(){
      callApi('Xe', 'GET', null).then(res =>{
        this.setState({
          Xe :res.data
        })
      });
    }

    render() {
      var { Xe }= this.state;

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
        <div className="listcars-items-content">
          <ul>
          {this.showXe(Xe)}
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/* end main */}
</div>
{/* end listcars */}

            </div>
        );
    }
    showXe(Xe){
        var result = null;
        if(Xe.length > 0){
                result = Xe.map((Xe,index,match) =>{
                    return (
                        <CarItemsContent
                            key={index}
                            Xe={Xe}
                            index={index}  
                            match={match}
                        />
                    );
                })
        }
        return result
        
    }
}

export default Danhsachxe;