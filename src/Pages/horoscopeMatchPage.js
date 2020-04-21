import React from 'react';
import { connect } from 'react-redux';

class horoscopeMatchPage extends React.Component {
  state = {
    tab: '',
  };

  handleTabChange = (event) => {
    this.setState({
      tab: event.target.name,
    });
  };

  render() {
    const { horoscopeMatch } = this.props;
    let horoscope_one = horoscopeMatch.zodiac_one;
    let horoscope_two = horoscopeMatch.zodiac_two;
    if (horoscopeMatch) {
      horoscope_two =
        horoscopeMatch.zodiac_two.toUpperCase()[0] +
        horoscopeMatch.zodiac_two.slice(1);
      horoscope_one =
        horoscopeMatch.zodiac_one.toUpperCase()[0] +
        horoscopeMatch.zodiac_one.slice(1);
    }
    return (
      <div class="container compatibility-reading">
        <div className="buttons">
          <button name="general" onClick={this.handleTabChange}>
            {horoscope_one} & {horoscope_two} Compatibility
          </button>

          <button name="pros" onClick={this.handleTabChange}>
            The Pros
          </button>
          <button name="cons" onClick={this.handleTabChange}>
            The Cons
          </button>
          <button name="max" onClick={this.handleTabChange}>
            How to Balance
          </button>
        </div>
        {!this.state.tab ? (
          <h1>
            Welcome to Your Horoascope Match Reading, Select Tabs to read!
          </h1>
        ) : null}
        {this.state.tab === 'general' ? (
          <div>
            <h2>
              {horoscope_one} & {horoscope_two} love Compatibility
            </h2>
            <br />
            <p>{horoscopeMatch.description}</p>
          </div>
        ) : null}
        {this.state.tab === 'pros' ? (
          <div>
            <h2>
              The Pros of {horoscope_one} & {horoscope_two} in Love
            </h2>
            <br />
            <p>{horoscopeMatch.pro}</p>
          </div>
        ) : (
          <div></div>
        )}
        {this.state.tab === 'cons' ? (
          <div>
            <h2>
              The Cons of {horoscope_one} & {horoscope_two} in love
            </h2>
            <br />
            <p>{horoscopeMatch.con}</p>
          </div>
        ) : (
          <div></div>
        )}
        {this.state.tab === 'max' ? (
          <div>
            <h2>
              How to Make it Work{horoscope_one} & {horoscope_two}
            </h2>
            <br />
            <p>{horoscopeMatch.maximize}</p>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    horoscopeMatch: state.horoscopeMatch,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    selectedZodiac: (zodiac) => {
      const action = {
        type: 'SELECTED_ZODIAC',
        selectedZodiac: zodiac,
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(horoscopeMatchPage);
