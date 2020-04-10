import React, {Component} from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom';
import AccountDetails from './AccountDetails'
import DailyReading from './DailyReading'
import logo from '../../assets/images/logo.png'
const Styles = styled.div`
    .my-col{
        background-color: grey;
        border: 6px solid black;
        font-family: monospace;
        height:600px;
    }
`
class UserPgDailyReading extends Component{
    componentDidMount(){
        fetch(`http://sandipbgt.com/theastrologer/api/horoscope/${this.props.userData.zodiac.toLowerCase()}/today`)
        .then(resp=>resp.json())
        .then(data=>{
    
            this.props.userZodiacNow(data)
        })
    }
    render(){
        const token = localStorage.getItem('token')
        if (!token) {
            this.props.history.push('/login');
          } 
        return(
            <div className="container">
                <Styles>
                <div className="row my-row justify-content-around">
                    <div className="col-4 my-col justify-content-around">
                        <h2>Account Information </h2>
                        <AccountDetails/>
                    </div>
                    <div className="col-8 my-col justify-content-around">
                        <h1>{this.props.userData.zodiac} Daily! </h1>
                       <img src={logo} alt="logo" height="170px" /><br/>
                        {this.props.zodiacIsLoading ? <h1>IS LOADING</h1> : <DailyReading/>} 
                    </div>
                </div>
                </Styles>
            </div>
        )
    }
}
const mapStateToProps=state=>{
return{ userAuth: state.userAuth, userData:state.userData, userZodiac:state.userZodiac, zodiacIsLoading: state.zodiacIsLoading}
}
const mapDispatchToProps = dispatch => {
    return {
        userZodiacNow: userZodiac => {
        const action = {
          type: 'FETCH_USER_ZODIAC',
          userZodiac: userZodiac
        };
        dispatch(action);
      }
    };
  };
export default withRouter (connect(mapStateToProps,mapDispatchToProps)(UserPgDailyReading))