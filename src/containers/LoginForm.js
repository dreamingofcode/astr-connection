import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FacebookLoginButton } from 'react-social-login-buttons';
import { connect } from 'react-redux';
class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  
  };
  handleSubmit = e => {
    e.preventDefault();
    const configObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(this.state)
    };
    fetch(`https://astro-connection.herokuapp.com/api/v1/auth`, configObj)
      .then(resp => resp.json())
      .then(data => {
        console.log('user logging in data', data);
        if (data.error) {
          alert(data.error);
        } else {
          this.props.loginSuccess(data);
          localStorage.setItem('token', data.token);
          this.props.history.push('/user-page');
        }
      });
  };
  render() {
    return (
      <div className="login-page">
        <Form className="login-form" onSubmit={this.handleSubmit}>
          {/* <h1>
            <span className="font-weight-bold">Astro-Connection</span>
          </h1> */}
          {/* <img src={logo} alt="logo" height="170px" /> */}
          <h2 className="text-center">Welcome Back!</h2>
          <FormGroup>
            <Label className="font-weight-bold">Email</Label>
            <Input
              name="email"
              placeholder="Enter Email"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </FormGroup>
          <FormGroup>
            <Label className="font-weight-bold">Password</Label>
            <Input
              name="password"
              placeholder="Enter Password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </FormGroup>
          <Button className="btn-lg btn-dark btn-block">Login</Button>
          <div className="text-center pt-3 font-weight-bold">
            Or Continue with your social account!
          </div>
          <FacebookLoginButton className="mt-3 mb-3" />
          <div className="text-center">
            <a href="/account-details">Sign Up!</a>
            <span className="p-2">|</span>
            <a href="/forgot-password">Forgot Password</a>
          </div>
        </Form>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    loginSuccess: user => {
      const action = {
        type: 'USER_AUTH',
        userAuth: user
      };
      dispatch(action);
    }
  };
};
export default connect(null, mapDispatchToProps)(LoginForm);
