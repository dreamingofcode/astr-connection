import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import logo from '../../assets/images/logo.png';
class UserConfirmForm extends Component {
  continue = (event) => {
    //PROCESS-FORM//
    event.preventDefault();
 
    this.props.newUserData(this.props.state);
    this.props.nextStep();
    console.log("user user user", this.props.state)
  };
  back = (event) => {
    event.preventDefault();
    this.props.prevStep();
  };
  handleDelete = () => {
    const {userData}= this.props
    fetch(`http://localhost:3000/api/v1/users/${userData.id}`,{method: "DELETE"})
    .then(resp=>resp.json())
    .then(data=>{
      console.log("delete",data)
      this.props.history.push('/')
      localStorage.clear()

    });
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
        sexualOrientation,
      },
      handleChange,
    } = this.props;
    const token = localStorage.token;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <img src={logo} alt="logo" height="170px" />
          <h1>Confirm User Data</h1>
          <div className="user-form">
            <List>
              <ListItem primaryText="Name" secondaryText={name} />
              <ListItem primaryText="Email" secondaryText={email} />
              <ListItem primaryText="Password" secondaryText={password} />
              <ListItem primaryText="Birth-date" secondaryText={birthDate} />
              <ListItem primaryText="Gender" secondaryText={gender} />

              <ListItem
                primaryText="Sexual-Orientation"
                secondaryText={sexualOrientation}
              />
              <ListItem primaryText="Short Bio" secondaryText={bio} />
            </List>

            <br />
            <RaisedButton
              label="Back"
              primary={false}
              style={styles.button}
              onClick={this.back}
            />
            {token ? (
              <RaisedButton
                label="Update"
                primary={true}
                style={styles.button}
                onClick={this.continue}
              />
            ) : (
              <RaisedButton
                label="Continue"
                primary={true}
                style={styles.button}
                onClick={this.continue}
              />
            )}
            {token ? (
              <RaisedButton
                label="Delete Account!"
                primary={true}
                style={styles.button}
                onClick={() => {
                  if (
                    window.confirm('Are you sure you wish to delete this item?')
                  )
                    this.handleDelete();
                }}
              />
            ) : null}
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
const mapDispatchToProps = (dispatch) => {
  return {
    newUserData: (user) => {
      const action = {
        type: 'NEW_USER_DATA',
        payload: user,
      };
      dispatch(action);
    },
  };
};
const mapStateToProps=(state)=>{
  return{
    userData: state.userData
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserConfirmForm));
