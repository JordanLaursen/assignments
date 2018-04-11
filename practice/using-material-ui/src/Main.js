import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const style = {
  margin: 12,
};

const Main = () => (
    <div>
        <h1>Hello</h1>
        <div>
            <RaisedButton label="Submit" primary={true} style={style} />
        </div>
    </div>
);

export default Main;
