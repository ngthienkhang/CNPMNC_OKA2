import React, { Component } from 'react';



class AboutUs extends Component {
    render() {
        return (
          <div className="content">
  <div className="title">
    <h1>Về chúng tôi</h1>
  </div>
  <div className="content-items">
    <p>Công ty Cổ phần TRAVELUKA Việt Nam hoạt động trên nền tảng ứng dụng cho thuê xe tự lái 4-7 chỗ,
      theo mô hình kinh tế sẻ chia.</p>
    <p>Traveluka được thành lập với sứ mệnh mang đến nền tảng công nghệ hiện đại kết nối chủ xe ô tô và hành
      khách theo cách Nhanh Nhất, An Toàn Nhất và Tiết Kiệm Nhất.</p>
    <p>Traveluka hướng tới việc xây dựng một cộng đồng chia sẻ ô tô văn minh với nhiều tiện ích thông qua
      ứng dụng trên di động, nhằm nâng cao chất lượng cuộc sống của cộng đồng.</p>
  </div>
  <div className="content-items">
    <div className="row d-flex justify-content-center">
      <div className="content-row-items">
        <img src="/images/ScreenShot_20210527150419.png" alt="" />
        <p>Đặt xe bằng 1 Click</p>
      </div>
      <div className="content-row-items">
        <img src="/images/ScreenShot_20210527150438.png" alt="" />
        <p>Traveluka đã có mặt ở hầu hết các quận huyện TPHCM và các tỉnh thành lớn như Hà Nội, Hải
          Phòng, Đà Nẵng, Đà Lạt, Long An và đang tiếp tục mở rộng sang các tỉnh thành khác.</p>
      </div>
      <div className="content-row-items">
        <img src="/images/ScreenShot_20210527150457.png" alt="" />
        <p>Hơn 100 mẫu xe</p>
      </div>
    </div>
  </div>
</div>


        );
    }
}

export default AboutUs;