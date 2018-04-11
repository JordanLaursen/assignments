import React, { Component } from 'react';
import Main from "./Main";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <div>
          <MuiThemeProvider>
              <Main />
          </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
