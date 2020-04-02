import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Dialog from '@material-ui/core/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import DateForm from './DateForm';
import GenderForm from './GenderForm';
import BioForm from './BioForm';
import SexualOForm from './SexualOForm';
import logo from '../../assets/images/logo.png';
class UserPersonalForm extends Component {
  continue = event => {
    event.preventDefault();
    this.props.nextStep();
  };
  back = event => {
    event.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <div className="login-form">
          <h1>
            <span className="font-weight-bold">Astro-Connection</span>
          </h1>
          <img src={logo} alt="logo" height="170px" />
          <div className="date-form">
            <DateForm />
          </div>
          <GenderForm />
          <SexualOForm />
          <BioForm />

          <br />
          <RaisedButton
            label="Back"
            primary={false}
            style={styles.button}
            onClick={this.back}
          />

          <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}
const styles = {
  button: {
    margin: 15
  }
};
export default UserPersonalForm;
