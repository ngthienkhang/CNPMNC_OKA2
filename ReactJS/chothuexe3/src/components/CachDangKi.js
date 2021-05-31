import React, { Component } from 'react';

class CachDangKi extends Component {
    render() {
        return (
            <div className="content">
  <div className="title">
    <h1>Tôi đăng kí xe cho thuê như thế nào?</h1>
  </div>
  <div className="content-items">
    <ul>
      <li>
        <h4>Bước 1: Đăng nhập</h4>
        <p>Đăng nhập vào tài khoản của mình, nếu bạn chưa có tài khoản thì có thể đăng ký tạo tài khoản</p>
        <img src="/images/ScreenShot_20210531001018.png" style={{height: 'auto'}} alt="" />
      </li>
      <li>
        <h4>Bước 2: Đăng kí xe</h4>
        <p>Chọn mục "Đăng kí xe" và điền các thông tin về chiếc xe bạn muốn đăng kí.</p>
        <p>(gồm hình ảnh xe, dòng xe, số km đã đi, bảo hiểm xe, các giấy tờ xe liên quan, các tiện ích đi kèm, bảng giá cho thuê, hình thức khuyến mãi, phương thức và phí giao nhận xe, danh sách các ngày cho thuê)</p>
      </li>
      <li>
        <h4>Bước 3: Chờ phê duyệt</h4>
        <p>Trong thời gian 1 ngày làm việc. Nếu thỏa mãn các tiêu chí, xe của bạn sẽ được chấp thuận đăng kí trên sàn giao dịch.</p>
        <p>Trường hợp các xe không đáp ứng tiêu chí tuyển lựa, công ty sẽ gửi email thông báo lí do đến bạn.</p>
      </li>
    </ul>
  </div>
</div>

        );
    }
}

export default CachDangKi;