import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
// import Dialog from 'material-ui/core/Dialog';
// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
// import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
class UserDetailsForm extends Component {
  continue = (event) => {
    event.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;
    const token = localStorage.token;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <div className="login-form">
            {/* <h1>
              <span className="font-weight-bold">Astro-Connection</span>
            </h1>
            <img src={logo} alt="logo" height="170px" /> */}
            <img src={logo} alt="logo" height="170px" />
            {token ? <h1>Edit Form</h1> : <h1>Sign-up Form</h1>}

            <TextField
              hintText="Enter your Full Name"
              floatingLabelText="Full name"
              onChange={handleChange('name')}
              defaultValue={values.name}
            />
            <br />
            <TextField
              hintText="Enter your Email Address"
              floatingLabelText="Email Address"
              onChange={handleChange('email')}
              defaultValue={values.email}
            />
            <br />
            <TextField
              hintText="Enter New Password"
              floatingLabelText="Create Password"
              onChange={handleChange('password')}
              defaultValue={values.password}
            />
            <br />
            <TextField
              hintText="Confirm Password"
              floatingLabelText="Confirm Password"
              onChange={handleChange('password_confirmation')}
              defaultValue={values.password_confirmation}
            />
            <br />
            <RaisedButton
              label="Continue"
              primary={true}
              style={styles.button}
              onClick={this.continue}
            />
            {/* </Dialog> */}
          </div>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
const styles = {
  button: {
    margin: 15,
  },
};
export default UserDetailsForm;
