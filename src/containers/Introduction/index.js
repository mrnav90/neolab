'use strict';

import React from 'react';
import { MasterLayout } from '../../components/Layout';

export default class IntroductionPage extends React.Component {
  render() {
    return (
      <MasterLayout feature="home">
          <div>Hello page</div>
      </MasterLayout>
    );
  }
}
