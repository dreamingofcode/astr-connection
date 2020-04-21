import React from 'react';
import styled from 'styled-components';
import { Jumbotron as Jumbo, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import dailyReadingCard from '../assets/images/lovematch4.jpeg';
import loveCalCard from '../assets/images/lovematch3.jpg';
import datingCard from '../assets/images/lovematch.jpeg';
import DatingCards from '../containers/datingCards';
import Filter from '../components/otherUsers/Filter';
import Footer from '../containers/footer'
const Styles = styled.div`
  .my-col {
    background-color: grey;
    border: 6px solid black;
    font-family: monospace;
    height: 600px;
  }
`;
class Home extends React.Component {
  createChatRoom=()=>{
    
  }
  render() {
    return (
      <Styles>
        <div className="container my-container"></div>
        <div className="row my-row justify-content-around">
          <div className="col-4 my-col justify-content-around">
            <h1>Discover Who You Truely Are!</h1>

            <div className="row justify-content-center">
              <div className="col-10">
                {' '}
                <img
                  src={dailyReadingCard}
                  alt="logo"
                  width="350px"
                  height="270px"
                />
              </div>
            </div>
            <br />
            <h6>
              Check out your general horoscope reading and begin to understand
              who you truelly are! Find out the qualities which inherentaly make
              you or break you!. Learn to understand your strengths and
              weaknessess with our in-depth descriptions wrtitten by prestine
              figures in the field of astrology!{' '}
            </h6>

            <Link className="Link" to="/horoscope-discover-page">
              <Button>Read Daily Horoscope!</Button>
            </Link>

            <br />
          
          </div>
          <div className="col-4 my-col justify-content-around">
            <h1>Find the Perfect Match!</h1>
            <div className="row justify-content-center">
              <div className="col-10">
                {' '}
                <img
                  src={datingCard}
                  alt="logo"
                  width="350px"
                  height="270px"
                />
              </div>
            </div>
            <br />
            <h6>
              It is written in the stars! Discover who is most suitable for you
              and who you should avoid! Do not miss the opprotunity to enhance
              your love life and better your relationship with friends! Friends
              and lovers welcomed!
            </h6>
            <br />
            <br />
            <Link className="Link" to="/love-calulator">
              <Button>Compatability Calculator</Button>
            </Link>
          </div>
          <div className="col-4 my-col justify-content-around">
            <h1>Explore Your Options!</h1>
            <div className="row justify-content-center">
              <div className="col-10">
                <img src={loveCalCard} alt="logo" width="350px" height="270px" />
              </div>
            </div>
            <br />
            <h6>
              Join our Community of users and make lasting connections based on
              horoscope compatibilities! Our members are rated based on your own
              horoscope to generate more suitable matches!
            </h6>
            <br /> <br />
            <Link className="Link" to="/login">
              <Button>Meet Local Singles!</Button>
            </Link>
          </div>
        </div>
        <Jumbo className="jumbo2">
          <div className="filter">
          <h1 className="my-h1">Users Near You!</h1>
            {/* <Filter /> */}
          </div>
        <DatingCards />
        </Jumbo>
        {/* <Footer/> */}
      </Styles>
    );
  }
}
export default Home;
