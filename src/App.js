import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/home';
import LoginForm from './containers/LoginForm';
import NavBar from './containers/NavBar';
import SignUpForm from './containers/signUpForm';
import UserPage from './Pages/UserPage';
import horoscopeDiscover from './Pages/horoscopeDiscover'
import SuccessForm from './components/formComponents/SuccessForm';
import { Jumbotron as Jumbo, Button } from 'react-bootstrap';
import {connect} from 'react-redux'
import logo from './assets/images/logo.png';
import {getProfileFetch} from './reducers/actions/currentUser'
import loveCalculator from './Pages/loveCalculator';
import horoscopeMatchPage from './Pages/horoscopeMatchPage'


class App extends Component {
  componentWillMount() {
    this.props.getProfileFetch();
  }
  render() {
    return (
      <div className="App">
        <Router>
          <NavBar />
          <Jumbo className="jumbo" fluid>
            <img src={logo} circle className="logo1" height="150px" />
            <h1>Astro-Connection</h1>
            <h4>HOROSCOPE * LOVE * FRIENDS</h4>
          </Jumbo>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={LoginForm} />
            <Route path="/account-details" component={SignUpForm} />
            <Route path="/user-page" render={()=><UserPage userData={this.props.userData}/>} />
            <Route path="/success-new-user" component={SuccessForm} />
            <Route path="/horoscope-discover-page" component={horoscopeDiscover} />
            <Route path="/love-calulator" component={loveCalculator} />
            <Route path="/horoscope-match-page" component={horoscopeMatchPage} />
            <header className="App-header">
              <h1>hello,world!</h1>
            </header>
          </Switch>
        </Router>
      </div>
    );
  }
}
const mapStateToProps=state=>{
  return{ userData: state.userData}
}
const mapDispatchToProps=(dispatch)=>{
  return {
    getProfileFetch: ()=>{
      dispatch(getProfileFetch())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
