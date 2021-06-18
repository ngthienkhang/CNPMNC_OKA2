import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ListItemsAdminqlxe from '../../components/ListItemsAdminqlxe';
import callApi from '../../utils/apiCaller';




class Admin extends Component {
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

    onDelete = (_id) => {
      var {Xe} = this.state;
        callApi(`Xe/${_id}`, 'DELETE', null).then(res => {
          if(res.status === 200){
            var index = this.findIndex(Xe, _id);
            if(index !== -1){
              Xe.splice(index, 1);
              this.setState({
                Xe : Xe
              })
            }
          }
        })
    }

    findIndex = (Xe, _id) => {
      var result = -1;
      Xe.forEach((Xe,index)=>{
        if(Xe._id === _id){
          result = index;
        }
      })
    }

    render() {
      var { Xe } = this.state;
        return (
            <div className="container">
  <div className="sidebar-admin">
    <div className="block filter">
      <div className="filter-options">
        <div className="filter-options-items">
          <div className="filter-options-title" style={{borderTop: '5px solid #eee'}}>
            <a href>
              <h4>Quản lý xe</h4>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end sidebar */}
  <div className="main-admin">
    <div className="qlxe-main-admin">
      <div className="qlxe-heading d-flex justify-content-between">
        <h3 className="qlxe-title">Danh sách xe</h3>
      </div>
      <div className="qlxe-body">
      <table>
          <thead>
            <tr>
              <th>Mã xe</th>
              <th>Tên xe</th>
              <th>Tình trạng</th>
              <th>Biển số</th>
              <th>Giá</th>
              <th>Action</th>
            </tr>
          </thead>
        {this.showXe(Xe)}
        </table>
        <Link  to="/Admin/add" className="btn btn-light add-car">Thêm xe</Link>
      </div>
    </div>
  </div>
</div>

        );
    }
    showXe(Xe){
      var result = null;
      if(Xe.length > 0){
              result = Xe.map((Xe,index,match) =>{
                  return (
                      <ListItemsAdminqlxe
                          key={index}
                          Xe={Xe}
                          index={index}  
                          match={match}
                          onDelete = {this.onDelete}
                      />
                  );
              })
      }
      return result
    }
}

export default Admin;