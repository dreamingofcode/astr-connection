import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

import logo from '../../assets/images/logo.png';
class SuccessForm extends Component {
  continue = event => {
    //PROCESS-FORM//
    event.preventDefault();
    this.props.nextStep();
  };
  back = event => {
    event.preventDefault();
    this.props.prevStep();
  };
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <img src={logo} alt="logo" height="170px" />
          <h1>Your Account was Successfully Created!</h1>
          <div className="user-form"></div>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
const styles = {
  button: {
    margin: 15
  }
};
export default SuccessForm;
