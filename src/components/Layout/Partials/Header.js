'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerClass: 'header-container'
    };
    this.onScroll = this.onScroll.bind(this);
    window.addEventListener('scroll', this.onScroll);
  }

  onScroll(e) {
    if (window.scrollY > 0) {
      this.setState({
        headerClass: 'header-container sticky-header'
      });
    } else {
      this.setState({
        headerClass: 'header-container'
      });
    }
  }

  render() {
    return (
      <header className={this.state.headerClass}>
          <div className="content">
              <a href="http://jobs.neo-lab.vn/" className="logo"></a>
              <nav className="nav-menu">
                  <ul>
                      <li><Link to="/"><span>Trang chủ</span></Link></li>
                      <li><Link to="/"><span>Giới thiệu</span></Link></li>
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
