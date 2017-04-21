'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class FeatureTop extends React.Component {
  render() {
    let className = 'feature-top ' + this.props.name;
    return (
      <div className={className}>
          <div className="animation-block">
              <p className="wow fadeInUp" data-wow-delay="0.2s">Welcome to NeoLab Viet Nam</p>
              <p className="wow fadeInUp" data-wow-delay="0.8s">We are hiring</p>
              <p className="wow fadeInUp" data-wow-delay="1.4s"><Link to="/">Join us now</Link></p>
          </div>
      </div>
    );
  }
}
