import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

class HomePage extends Component {
    render() {
        return (
                <div>
  <div>
  <div className="tieude">
    <h1>ADVANTURE AWAITS</h1>
    <p>Hãy chọn cho bản thân chiếc xe phù hợp nhất nào!</p>
  </div>
  {/* end tieude */}
  <div className="container">
    <div className="reasons">
      <h2>TẠI SAO NÊN THUÊ XE Ô TÔ TRÊN TRAVELUKA</h2>
      <div className="box">
        <div className="box-items">
          <img src="https://ik.imagekit.io/tvlk/image/imageResource/2018/05/14/1526299345537-5d57c269f121ecb9ae60be83d7688d53.svg" alt="" />
          <h3>Tiết kiệm thời gian</h3>
          <p>Dễ dàng thuê xe ở bất cứ đâu và bất kỳ khi nào. So sánh xe ô tô từ các đối tác tin cậy của chúng
            tôi trên một nền tảng, việc tìm kiếm chiếc xe phù hợp với bạn trở nên dễ dàng hơn bao giờ hết.
          </p>
        </div>
        <div className="box-items">
          <img src="https://ik.imagekit.io/tvlk/image/imageResource/2018/05/14/1526299395599-27c9f8d3b8b182673dc9768a31eaa1d7.svg" alt="" />
          <h3>Dịch vụ chất lượng cao từ các đối tác tin cậy</h3>
          <p>Những đối tác tin cậy của chúng tôi cung cấp dịch vụ chất lượng đảm bảo rằng bạn có một chuyến đi
            an toàn, thoải mái và đáng nhớ.</p>
        </div>
        <div className="box-items">
          <img src="https://ik.imagekit.io/tvlk/image/imageResource/2018/05/14/1526299435281-ee34f2ae4efa6a2e73ebf5a810d5874a.svg" alt="" />
          <h3>Đánh giá thực tế từ người dùng</h3>
          <p>Những đánh giá thực tế từ những người dùng khác giúp bạn tìm được xe phù hợp.</p>
        </div>
      </div>
    </div>
  </div>
  {/* end reasons */}
  <div className="container">
    <div className="options">
      <div className="options-luachon">
        <h2>Thuê xe tự lái</h2>
        <hr className="phancach1" />
        <p>Du lịch cùng gia đình hoặc người thân sẽ vui hơn nếu bạn chọn phương tiện di chuyển phù hợp và
          thuê xe có thể là sự lựa chọn tốt nhất. Nhằm hỗ trợ sự linh hoạt trong khi đi du lịch của bạn,
          Traveloka hiện cung cấp dịch vụ cho Thuê xe tự lái. Bạn có thể tận hưởng tiện ích này bằng cách
          đặt trực tiếp qua Ứng dụng Traveloka. Thỏa sức tìm kiếm với nhiều lựa chọn xe tốt nhất kèm bảng
          giá chi tiết đi kèm.
        </p>
      </div>
      <div className="options-luachon">
        <h2>Thuê xe có tài xế</h2>
        <hr className="phancach1" />
        <p>Di chuyển thuận tiện là một vấn đề rất quan trọng khi bạn đi du lịch. Đặc biệt khi bạn mong muốn có
          một chuyến đi dễ dàng, ít rắc rối khi khám phá nhiều địa điểm du lịch thì việc thuê một chiếc xe có
          tài xế là lựa chọn hợp lý. Cùng với sự phát triển của kĩ thuật số, bạn có thể dễ dàng tận hưởng dịch
          vụ cho thuê xe thông qua Ứng dụng Traveloka. Dễ dàng so sánh giá từ các đối tác tin cậy của chúng
          tôi và tìm dịch vụ phù hợp với nhu cầu của mình.</p>
      </div>
    </div>
  </div>
  {/* end options */}
  <div className="tutorial" style={{color: '#eee'}}>
    <h2>Hướng dẫn thuê xe</h2>
    <div className="tutorial-wrapper">
      <div className="tutorial-items">
        <img src="https://www.mioto.vn/static/media/step-1.640bee37.svg" alt="" />
        <p>Đặt xe với Traveluka</p>
      </div>
      <div className="tutorial-items">
        <img src="https://www.mioto.vn/static/media/step-2.75dbfcf5.svg" alt="" />
        <p>Nhận xe hoặc giao tận nơi</p>
      </div>
      <div className="tutorial-items">
        <img src="https://www.mioto.vn/static/media/step-3.055b2c05.svg" alt="" />
        <p>Trải nghiệm chuyến đi</p>
      </div>
      <div className="tutorial-items">
        <img src="https://www.mioto.vn/static/media/step-4.6b74a919.svg" alt="" />
        <p>Kết thúc giao dịch</p>
      </div>
    </div>
    <div className="d-flex">
      <div className="more ml-auto">
        <Link to="/AboutUs">
          <p>&lt;&lt; Đi nào &gt;&gt;</p>
        </Link>
      </div>
    </div>
  </div>
</div>

</div>
            
        );
    }
}

export default HomePage;