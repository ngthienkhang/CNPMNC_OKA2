import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class ListItemsAdminqlxe extends Component {

    onDelete = (_id) => {  
      if(confirm('Ban co chac muon xoa?')){ //eslint-disable-line
        this.props.onDelete(_id);
      }
    }

    render() {
        var { Xe, match, index } = this.props;
        console.log(Xe);    
        return (  
          <tbody>
            <tr>
              <td>{Xe._id}</td>
              <td>{Xe.TenXe}</td>
              <td>{Xe.TinhTrang}</td>
              <td>{Xe.BienSo}</td>
              <td>{Xe.Gia}</td>
              <td>
                <Link to={`/Admin/${Xe._id}/edit`} className="btn btn-primary">Edit</Link>
                <button type="button" className="btn btn-danger" onClick={ () => this.onDelete(Xe._id) }>Delete</button>
              </td>
            </tr>
          </tbody>

        );
    }
}

export default ListItemsAdminqlxe;