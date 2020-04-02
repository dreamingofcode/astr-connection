import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import UserDetailsForm from '../components/formComponents/UserDetailsForm';
import UserPersonalForm from '../components/formComponents/UserPerosnalForm';
import UserConfirmForm from '../components/formComponents/UserConfirmForm';
import SuccessForm from '../components/formComponents/SuccessForm';
class SignUpForm extends Component {
  state = {
    step: 1,
    name: '',
    email: '',
    password: '',
    city: '',
    state: '',
    bio: '',
    birthDate: '',
    gender: '',
    sexualOrientation: '',
    hobbies: ''
  };
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };
  handleChange = input => event => {
    this.setState({
      [input]: event.target.value
    });
  };
  render() {
    const {
      step,
      name,
      email,
      password,
      city,
      bio,
      birthDate,
      gender,
      sexualOrientation,
      hobbies
    } = this.state;
    const values = {
      name,
      email,
      password,
      bio,
      birthDate,
      gender,
      sexualOrientation
    };
    switch (step) {
      case 1:
        return (
          <UserDetailsForm
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <UserPersonalForm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <UserConfirmForm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );

      case 4:
        return (
        <SuccessForm/>);
    }
  }
}
export default SignUpForm;
