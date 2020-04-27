import React, {Component} from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom';
import AccountDetails from './AccountDetails'
import DailyReading from './DailyReading'
import logo from '../../assets/images/logo.png'
import {getProfileDetails} from '../../reducers/actions/profileDetails' 
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
    
            this.props.getProfileDetails(data)
        })
    //     fetch(`http://localhost:3000/posts/${this.props.userData.id}`)
    //    .then((resp) => resp.json())
    //    .then((data) => {
    //      if (!data.error) {
    //        console.log('we got image', data);
    //        this.props.getProfileDetails(data);
    //      }
    //    });
    
    }
    render(){
        const token = localStorage.getItem('token')
        if (!token) {
            this.props.history.push('/login');
          } 
        return(
            <React.Fragment>
                <Styles>
                <div className="row  my-row justify-content-start">
                    <div className="col-4 my-col3 justify-content-start">
                        <h2>Account Information </h2><br/>
                        <AccountDetails/>
                    </div>
                    <div className="col-7 my-col3 justify-content-around">
                        <h1>{this.props.userData.zodiac} Daily! </h1>
                       <img src={logo} alt="logo" height="170px" /><br/>
                        {this.props.zodiacIsLoading ? <h1>IS LOADING</h1> : <DailyReading/>} 
                    </div>
                </div>
                </Styles>
            </React.Fragment>
        )
    }
}
const mapStateToProps=state=>{
return{ userAuth: state.userAuth, userData:state.userData, userZodiac:state.userZodiac, zodiacIsLoading: state.zodiacIsLoading}
}
// const mapDispatchToProps = dispatch => {
//     return {
//         userZodiacNow: userZodiac => {
//         const action = {
//           type: 'FETCH_USER_ZODIAC',
//           userZodiac: userZodiac
//         };
//         dispatch(action);
//       }
//     };
//   };
  const mapDispatchToProps=(dispatch)=>{
    return {
      getProfileDetails: (data)=>{
        dispatch(getProfileDetails(data))
      }
    }
  }
export default withRouter (connect(mapStateToProps,mapDispatchToProps)(UserPgDailyReading))