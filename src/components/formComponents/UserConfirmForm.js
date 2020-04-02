import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

import logo from '../../assets/images/logo.png';
class UserConfirmForm extends Component {
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
    const {
      values: {
        name,
        email,
        password,
        bio,
        birthDate,
        gender,
        sexualOrientation
      },
      handleChange
    } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <img src={logo} alt="logo" height="170px" />
          <h1>Confirm User Data</h1>
          <div className="user-form">
           <List>
               <ListItem
               primaryText="Name"
               secondaryText={name}
               />
                <ListItem
               primaryText="Email"
               secondaryText={email}
               />
                <ListItem
               primaryText="Password"
               secondaryText={password}
               />
                <ListItem
               primaryText="Birth-date"
               secondaryText={birthDate}
               />
                <ListItem
               primaryText="Gender"
               secondaryText={gender}
               />
         
           <ListItem
               primaryText="Sexual-Orientation"
               secondaryText={sexualOrientation}
               />
                <ListItem
               primaryText="Short Bio"
               secondaryText={bio}
               />
          
           </List>
          
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
            {/* </Dialog> */}
          </div>
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
export default UserConfirmForm;
