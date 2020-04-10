import React from 'react';
import ZodiacSlider from '../components/zodiacComponents/zodiacSlider';
import zodiacData from '../components/zodiacComponents/zodiacData';
import {matchMaker} from '../components/zodiacComponents/matchMaker'
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
class loveCalculator extends React.Component {
  constructor() {
    super();
    this.state = {
      zodiacProperties: zodiacData.properties,
      property: zodiacData.properties[0],

      //   zodiacProperties2: zodiacData.properties,
      property2: zodiacData.properties[0],

      userZodiac: zodiacData.properties[0],
      partnerZodiac: zodiacData.properties[0]
    };
  }
  nextProperty = () => {
    const newIndex = this.state.property.index + 1;
    // const zodiac= zodiacData.properties[newIndex]
    // this.props.selectedZodiac(zodiac) tried using store ans reddux
    this.setState({
      property: zodiacData.properties[newIndex],
      userZodiac: zodiacData.properties[newIndex]
    });
  };
  prevProperty = () => {
    console.log('this', this.state);
    const newIndex = this.state.property.index - 1;
    this.setState({
      property: zodiacData.properties[newIndex],
      userZodiac: zodiacData.properties[newIndex]
    });
  };
  nextProperty2 = () => {
    const newIndex = this.state.property2.index + 1;
    this.setState({
      property2: zodiacData.properties[newIndex],
      partnerZodiac: zodiacData.properties[newIndex]
    });
  };
  prevProperty2 = () => {
    console.log('this partners', this.state);
    const newIndex = this.state.property2.index - 1;
    this.setState({
      property2: zodiacData.properties[newIndex],
      partnerZodiac: zodiacData.properties[newIndex]
    });
  };
  getReading=()=>{
   const match = this.state.userZodiac.sign + " " +this.state.partnerZodiac.sign
   console.log("match", match)
     let match_id= matchMaker(match)
  
    console.log(match_id)
    fetch(`http://localhost:3000/api/v1/zodiac_matches/${match_id}`)
    .then(resp=> resp.json())
    .then(data=>{
      console.log("mathDATA",data)
      this.props.history.push('/horoscope-match-page');
      this.props.horoscopeMatch(data)
    })
  }
  render() {
    const { zodiacProperties, property, property2 } = this.state;

    return (
      <div className="container">
        <MuiThemeProvider>
          <div className="row">
            <div className="col-12">
              <h1>Please Select Your Horosocope!</h1>
              <br />
              <br />
              <br />

              <ZodiacSlider
                zodiacProperties={zodiacProperties}
                property={property}
                nextProperty={this.nextProperty}
                prevProperty={this.prevProperty}
                property2={property2}
                nextProperty2={this.nextProperty2}
                prevProperty2={this.prevProperty2}
              />
            </div>
          </div>
          <div className="row my-row1 horoscopeMatch">
            <div className="col">
              <h1>
                {property.sign.charAt(0).toUpperCase() + property.sign.slice(1)}
              </h1>
              <img src={property.ElPicture} width="100px" height="100px" />
            </div>
            <h1>+</h1>
            <div className="col">
              <h1>
                {property2.sign.charAt(0).toUpperCase() +
                  property2.sign.slice(1)}
              </h1>
              <img src={property2.ElPicture} width="100px" height="100px" />
            </div>
            <br />
          </div>
          <RaisedButton
            label="Continue to Get Reading!"
            primary={true}
            style={styles.button1}
            onClick={this.getReading}
          />
        </MuiThemeProvider>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    horoscopeMatch: match => {
      const action = {
        type: 'HOROSCOPE_MATCH',
        payload:match
      };
      dispatch(action);
    }
  };
};
const mapStateToProps = state => {
  return {
    selectedZodiac: state.selectedZodiac,
    zodiacData: state.zodiacData
  };
};
const styles = {
  button: {
    margin: 15
  },
  button1: {
    margin: -0
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(loveCalculator);
