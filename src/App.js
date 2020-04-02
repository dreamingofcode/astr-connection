import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Pages/home'
import LoginForm from './containers/LoginForm'
import NavBar from'./containers/NavBar'
import SignUpForm from './containers/signUpForm'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Home}/>
        <Route  path="/login" component={LoginForm}/>
        <Route  path="/sign-up" component={SignUpForm}/>
      <header className="App-header">
 
        <h1>hello,world!</h1>
      </header>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
