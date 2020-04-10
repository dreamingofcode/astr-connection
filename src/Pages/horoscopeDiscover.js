import React from 'react';
import zodiacData from '../components/zodiacComponents/zodiacData';
import ZodiacCard from '../components/zodiacComponents/zodiacCard';
import { connect } from 'react-redux';

class horoscopeDiscover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zodiacProperties: zodiacData.properties,
      property: zodiacData.properties[0]
    };
  }
  nextProperty = () => {
    const newIndex = this.state.property.index + 1;
    const zodiac= zodiacData.properties[newIndex]
    this.props.selectedZodiac(zodiac)
    this.setState({
      property: zodiacData.properties[newIndex]
    });
  };
  prevProperty = () => {
    console.log('this', this.state.property);
    const newIndex = this.state.property.index - 1;
    this.setState({
      property: zodiacData.properties[newIndex]
    });
  };
  render() {
    const { zodiacProperties, property } = this.state;
    const {
        index,
        sign,
        picture,
        Element,
        ElPicture,
        Quality,
        Color,
        Day,
        Ruler,
        PlanetPic,
        PlanetPic2,
        Compatibility,
        luckyNumbers,
        dateRange,
        Strengths,
        Weaknesses,
        likes,
        dislikes,
        description,
        description2,
        description3,
        description4
      } = property;
    return (
      <div>
        <div className="container my-container">
            <button
              onClick={() => this.nextProperty()}
              disabled={property.index === 11}
            >
              Next
            </button>
            <button
              onClick={() => this.prevProperty()}
              disabled={property.index === 0}
            >
              Previous
            </button>
          <div className="row">
              <div className="col">
            <div className={`cards-slider active-slide-${property.index}`}>
              <div
                className="cards-slider-wrapper"
                style={{
                  transform: `translateX(-${property.index *
                    (100 / zodiacProperties.length)}%)`
                }}
              >
                {zodiacProperties.map(property => (
                  <ZodiacCard key={property.sign} property={property} />
                ))}
              </div>
            </div></div>
          </div>
          <div className="row my-roww horoscopeMatch">
            <div className="col-4 my-col">
                <h1 className="title">{sign.charAt(0). toUpperCase()+sign.slice(1)}</h1>
              <img src={picture} height="200px" width="200px"/><br/>
              <img src={ElPicture} alt="element" height="90px" width="90px"/>
                <h3>Quality:{Quality}</h3><br/>
                <h3>Color:{Color}</h3><br/>
                <h3>Day:{Day}</h3><br/>
                <h3>Ruler:{Ruler}</h3><br/>
                <img src={PlanetPic} alt="planet" height="150px" width="150px" />
                <h3>Lucky Numbers:{luckyNumbers}</h3><br/>
                <h3>Compatibility:{Compatibility}</h3><br/>
                <button
              onClick={() => this.nextProperty()}
              disabled={property.index === 11}
            >
              Next
            </button>
            <button
              onClick={() => this.prevProperty()}
              disabled={property.index === 0}
            >
              Previous
            </button>
               
            </div>
            <div className='col-8 my-col '>
                <h1 className="title">General Description:</h1> <br/>
                <h3>{property.description}</h3><br/>
               <h2> --Elements of Nature--</h2>
                <h3>{property.description2}</h3>
                {/* <h3>{property.description3}</h3>
                <h3>{property.description4}</h3> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps=(state)=>{
  return{
    selectedZodiac: state.selectedZodiac
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    selectedZodiac: zodiac => {
      const action = {
        type: "SELECTED_ZODIAC",
        selectedZodiac: zodiac
      };
      dispatch(action);
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(horoscopeDiscover);
