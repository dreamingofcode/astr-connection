import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserPgDailyReading from '../components/accountComponents/UserPgDailyReading';
import { withRouter } from 'react-router-dom';
class currentlyViewing extends Component {
  componentDidMount() {
    const token = localStorage.getItem('token');
    if (!token) {
      this.props.history.push('/login');
    } else {
      const reqObj = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      fetch('http://localhost:3000/api/v1/current_user', reqObj)
        .then(resp => resp.json())
        .then(data => {
          this.props.fetchUserData(data);
        })
        .catch(err => console.log(err))
    }
  }

  render() {
    const token = localStorage.getItem('token');
    if (!token) {
      this.props.history.push('/login');
    }
    return (
      <React.Fragment>
        {this.props.isLoading ? <h1>IS LOADING</h1> : <UserPgDailyReading />}
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    userAuth: state.userAuth,
    userData: state.userData,
    isLoading: state.isLoading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchUserData: userData => {
      const action = {
        type: 'FETCH_USER_DATA',
        userData: userData
      };
      dispatch(action);
    }
  };
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(currentlyViewing)
);
