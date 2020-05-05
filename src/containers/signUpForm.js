import React, { Component } from 'react';
// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
// import { Link } from 'react-router-dom';
// import logo from '../assets/images/logo.png';
import { connect } from 'react-redux';
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
    bio: '',
    birthDate: '',
    gender: '',
    sexualOrientation: '',
    zodiac: '',
    password_confirmation: '',
    age: '',
    profile_image: 'Please upload Image',
  };

  componentDidMount() {
    const token = localStorage.token;
    const { userData, isLoading } = this.props;
    if (token) {
      //seems like userdata comes back too late to access the if statement! component mounts before the states uodate

      if (!isLoading) {
        this.setState({
          name: userData.name,
          email: userData.email,
          password: userData.password,
          password_confirmation: userData.password,
          zodiac: userData.zodiac,
          bio: userData.bio,
          birthDate: userData.birthDate,
          gender: userData.gender,
          sexualOrientation: userData.sexualOrientation,
          profile_image: userData.profile_image,
        });
      }
    }
  }
  ////function to determine your age and make sure your older than 18
  handleAge = () => {
    if (this.state.birthDate) {
      const today = new Date();
      var birthDates = new Date(this.state.birthDate);
      var age = today.getFullYear() - birthDates.getFullYear();
      var m = today.getMonth() - birthDates.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDates.getDate())) {
        age--;
      }
      if (age < 18) {
        alert('You Must Be 18 or Older To Make An Account!');
      } else {
        this.nextStep()
        this.setState({
          age: age,
       
        });
      }
    }
  };
  handleZodiac = () => {
    if (this.state.birthDate) {
      console.log("we made it",this.state.birthDate)
      const { birthDate } = this.state;
      const month = birthDate.split('-')[1];
      const day = birthDate.split('-')[2];
      if ((month === '03' && day > '20') || (month === '04' && day < '21')) {
        this.setState({
          zodiac: 'Aries',
        });
      } else if (
        (month === '04' && day > '20') ||
        (month === '05' && day < '21')
      ) {
        this.setState({
          zodiac: 'Taurus',
        });
      } else if (
        (month === '05' && day > '20') ||
        (month === '06' && day < '21')
      ) {
        this.setState({
          zodiac: 'Gemini',
        });
      } else if (
        (month === '06' && day > '20') ||
        (month === '07' && day < '23')
      ) {
        this.setState({
          zodiac: 'Cancer',
        });
      } else if (
        (month === '07' && day > '22') ||
        (month === '08' && day < '23')
      ) {
        this.setState({
          zodiac: 'Leo',
        });
      } else if (
        (month === '08' && day > '22') ||
        (month === '09' && day < '23')
      ) {
        this.setState({
          zodiac: 'Virgo',
        });
      } else if (
        (month === '09' && day > '22') ||
        (month === '10' && day < '23')
      ) {
        this.setState({
          zodiac: 'Libra',
        });
      } else if (
        (month === '10' && day > '22') ||
        (month === '11' && day < '23')
      ) {
        this.setState({
          zodiac: 'Scorpio',
        });
      } else if (
        (month === '11' && day > '22') ||
        (month === '12' && day < '22')
      ) {
        this.setState({
          zodiac: 'Sagittarius',
        });
      } else if (
        (month === '12' && day > '22') ||
        (month === '01' && day < '20')
      ) {
        this.setState({
          zodiac: 'Capricorn',
        });
      } else if (
        (month === '01' && day > '19') ||
        (month === '02' && day < '20')
      ) {
        this.setState({
          zodiac: 'Aquarius',
        });
      } else if (
        (month === '02' && day > '19') ||
        (month === '03' && day < '21')
      ) {
        this.setState({
          zodiac: 'Pisces',
        });
      }
    }
    console.log("we made it 2",this.state.zodiac)

  };
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      ...this.state,
      step: step + 1,
    });
  };
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };
  handleChange = (input) => (event) => {
    this.setState({
      [input]: event.target.value,
    });
  };
  render() {
    const {
      step,
      name,
      email,
      password,
      passwordCon,
      bio,
      birthDate,
      gender,
      sexualOrientation,
    } = this.state;
    const values = {
      name,
      email,
      password,
      passwordCon,
      bio,
      birthDate,
      gender,
      sexualOrientation,
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
            handleZodiac={this.handleZodiac}
            handleAge={this.handleAge}
          />
        );

      case 3:
        return (
          <UserConfirmForm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
            state={this.state}
          />
        );
      case 4:
        return <SuccessForm state={this.state} />;
    }
  }
}
const mapStateToProps = (state) => {
  return {
    userData: state.userData,
    isLoading: state.isLoading,
  };
};
export default connect(mapStateToProps, null)(SignUpForm);
