'use strict';

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  spacing: {
    desktopGutterLess: 5
  }
});

export default class Application extends React.Component {
  render() {
    const childrenWithProps = React.Children.map(this.props.children, (child) => React.cloneElement(child, {}));
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
          <div className="wrapper">
              {childrenWithProps}
          </div>
      </MuiThemeProvider>
    );
  }
}
