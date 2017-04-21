'use strict';

import React from 'react';
import Header from '../Partials/Header';
import Footer from '../Partials/Footer';
import FeatureTop from '../Partials/FeatureTop';

export default class MasterLayout extends React.Component {
  render() {
    const childrenWithProps = React.Children.map(this.props.children, (child) => React.cloneElement(child, {}));
    return (
      <div className="content-wrap">
          <Header/>
          { this.props.feature ? <FeatureTop name={this.props.feature} /> : null }
          <main className="main-container">{childrenWithProps}</main>
          <Footer/>
      </div>
    );
  }
}
