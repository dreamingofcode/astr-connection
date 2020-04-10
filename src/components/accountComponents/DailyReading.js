import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { List, ListItem } from 'material-ui/List';
import { withRouter } from 'react-router-dom';

class DailyReading extends Component {
  renderEdit = () => {
    this.props.history.push('/No-match');
  };
  render() {
    return (
      <React.Fragment>
        <MuiThemeProvider>
          <label>Today's Reading:</label>
          <br />
          <h6>{this.props.userZodiac.horoscope}</h6>
          <label>Mood:</label>
          <h4>{this.props.userZodiac.meta.mood}</h4>
          <label>Keywords:</label>
          <h4>{this.props.userZodiac.meta.keywords}</h4>
          <label>Intensity:</label>
          <h4 className="daily">{this.props.userZodiac.meta.intensity}</h4>

          <RaisedButton
            label="Read Yesterday's Horoscope!"
            primary={true}
            style={styles.button}
            onClick={this.renderEdit}
          /><RaisedButton
            label="Read Tomrrow's Horoscope!"
            primary={true}
            style={styles.button}
            onClick={this.renderEdit}
          />
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}
const styles = {
  button: {
    margin: 4 

  
  }
};
const token = localStorage.getItem('token');

const mapStateToProps = state => {
  return { userZodiac: state.userZodiac };
};
export default withRouter(connect(mapStateToProps, null)(DailyReading));
