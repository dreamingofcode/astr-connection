import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import RaisedButton from 'material-ui/RaisedButton';

import logo from '../../assets/images/logo.png';
class SuccessForm extends Component {
  componentDidMount() {
    const token = localStorage.token;
    const { userData ,newUserData} = this.props;
delete newUserData["step"]

    if (userData) {
      const configObj = {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          user: newUserData,
        }),
      };
      fetch(`https://astro-connection.herokuapp.com/api/v1/users/${userData.id}`, configObj)
        .then((resp) => resp.json())
        .then((data) => {
          console.log('newupdaTTTT', data);
        });
    } else {
      const configObj = {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          user: this.props.newUserData,
        }),
      };
      fetch(`https://astro-connection.herokuapp.com/api/v1/users`, configObj)
        .then((resp) => resp.json())
        .then((data) => {
          console.log('newUSERRR', data);
        });
    }
  }
  continue = (event) => {
    //PROCESS-FORM//
    // event.preventDefault();

    const token = localStorage.token;
    if (token) {
      this.props.history.push('/user-page');
    } else {
      if (this.props.newUserData) {
        this.props.history.push('/login');
      }
    }
  };

  render() {
    console.log("new user user data", this.props.newUserData)
    const token = localStorage.token;
    return (
      <MuiThemeProvider>
        <div className="login-form">
          <img src={logo} alt="logo" height="170px" />
          {token ? (
            <h1>Your Account Was Successfully UPDATED!</h1>
          ) : (
            <h1>Your Account was Successfully Created!</h1>
          )}
          <h2>Your Horoscope: {this.props.newUserData.zodiac}</h2>
          <RaisedButton
            label="Continue!"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />

          <div className="user-form"></div>
        </div >
      </MuiThemeProvider>
    );
  }
}
const styles = {
  button: {
    margin: 15,
    padding: 10,
  },
};
const mapStateToProps = (state) => {
  return {
    newUserData: state.newUserData,
    userData: state.userData,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserData: (userData) => {
      const action = {
        type: 'FETCH_USER_DATA',
        userData: userData,
      };
      dispatch(action);
    },
  };
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SuccessForm)
);
