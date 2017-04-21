'use strict';

import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer-container">
          <div className="content">
              <div className="left-content">
                  <a href="http://jobs.neo-lab.vn/" className="logo"></a>
                  <p className="company-title">Công ty TNHH NEOLAB Việt Nam</p>
                  <p className="company-info">
                      <span><strong>Trụ sở chính</strong>: Tầng 1,2,3 tòa nhà VNPT, 344 đường 2-9, Q. Hải Châu, TP Đà Nẵng</span>
                      <span><strong>Chi nhánh</strong>: Tầng 7, 60 Nguyễn Đình Chiểu, P. DaKao, Q. 1, TP. Hồ Chí Minh</span>
                      <span><strong>Trung tâm đào tạo</strong>: Tầng 3, 15 Quang Trung, Q. Hải Châu, TP. Đà Nẵng</span>
                      <span><strong>Phone</strong>: 0236 3539292 </span>
                      <span><strong>Email</strong>: <a href="mailto:hr@neo-lab.vn">hr@neo-lab.vn</a> | <a href="http://jobs.neo-lab.vn">Website: http://jobs.neo-lab.vn</a></span>
                  </p>
              </div>
              <div className="right-content">
                  <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fneolabvietnam%2F&tabs&width=500&height=214&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="100%" height="214" scrolling="no" frameBorder="0" allowTransparency="true"></iframe>
              </div>
              <div className="bottom-content">
                  <p>Copyright © 2016 NEOLAB VIET NAM Co., Ltd</p>
              </div>
          </div>
      </footer>
    );
  }
}
