import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
import logo from '../assets/images/logo.png'
import { connect } from 'react-redux';
const Styles = styled.div`
  .navbar {
    background-image: url('../assets/images/cosmos.jpg');
    background-color:grey;
    height: 80px;
  transition: all 0.5s;
  z-index: 997;
  transition: all 0.5s;
  padding: 16px 0;
  background: #213b52;
  border-radius: 6px;
  }
  
  .navbar-nav,
  .navbar-light .nav-link {
    color: #9fffcb;
    &:hover {
      color: white;
    }
    font-size:1.2em;
  }
  .navbar-brand {
    font-size: 3em;
    font-family:monospace;
    color: white;
    &:hover {
      color: white;
    }
  }
  .form-center {
    position: absolute !important;
    left: 47%;
    right: 17%;
  }
`;

class NavigationBar extends React.Component {
  handleLogOut = () => {
    this.props.logout();
    localStorage.removeItem('token');
  };
  render() {
    return (
      <Styles>
        <Navbar className="navbar" expand="lg">
          <img src={logo} circle className="logo" height="90px"/>
          <Navbar.Brand href="/">
           ASTRO-CONNECTION
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Form className="form-center">
        <FormControl type="text" placeholder="Search" className="" />
      </Form>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/about">About</Nav.Link>
              </Nav.Item>
              {/* {this.props.auth || this.props.clientAuth ? ( */}
                {/* <Nav.Item>
                  <Nav.Link href="/" onClick={this.handleLogOut}>
                    Logout
                  </Nav.Link>
                </Nav.Item>
              ) : ( */}
                <Nav.Item>
                  <Nav.Link href="/login">Login</Nav.Link>
                </Nav.Item>
            
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Styles>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.auth,
    clientAuth: state.clientAuth
  };
};
const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      const action = {
        type: 'LOGOUT'
      };
      dispatch(action);
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
