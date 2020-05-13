import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import RaisedButton from 'material-ui/RaisedButton';
import DateForm from './DateForm';
import GenderForm from './GenderForm';
import BioForm from './BioForm';
import SexualOForm from './SexualOForm';
import logo from '../../assets/images/logo.png';
class UserPersonalForm extends Component {
  continue = (event) => {
    event.preventDefault();
     this.props.nextStep();
     this.props.handleBoth()
    //this.props.handleZodiac();
    //this.props.handleAge()
  };
  back = (event) => {
    event.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, handleChange, handleAge, handleBoth} = this.props;
    const token = localStorage.token;

    return (
      <MuiThemeProvider>
        <div className="login-form">
          <img src={logo} alt="logo" height="170px" />
          {token ? <h1>Edit Form</h1> : <h1>Sign-up Form</h1>}
          <div className="date-form">
            <DateForm handleChange={handleChange}  handleAge={handleAge} values={values} />
          </div>
          <GenderForm handleChange={handleChange} values={values} />
          <SexualOForm handleChange={handleChange} values={values} />
          <BioForm handleChange={handleChange} values={values} />

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
    margin: 15,
  },
};
export default UserPersonalForm;
