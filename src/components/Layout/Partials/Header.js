'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="header-container">
          <div className="content">
              <a href="http://jobs.neo-lab.vn/" className="logo"></a>
              <nav className="nav-menu">
                  <ul>
                      <li><Link to="/"><span>Trang chủ</span></Link></li>
                      <li><Link to="/introduction"><span>Giới thiệu</span></Link></li>
                      <li><Link to="/"><span>Tuyển dụng</span></Link></li>
                      <li><Link to="/"><span>Câu hỏi thường gặp</span></Link></li>
                      <li><Link to="/"><span>Hoạt động nổi bật</span></Link></li>
                      <li><Link to="/"><span>Liên hệ</span></Link></li>
                  </ul>
              </nav>
          </div>
      </header>
    );
  }
}
