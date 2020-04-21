import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { List, ListItem } from 'material-ui/List';
import { withRouter } from 'react-router-dom';
import ListItemText from '@material-ui/core/ListItemText';

class AccountDetails extends Component {
  renderEdit = () => {
    this.props.history.push('/account-details');
  };
  render() {
    return (
      <React.Fragment>
        <MuiThemeProvider>
          <List>
            <ListItem
              style={styles.list}
              primaryText="Name"
              secondaryText={this.props.userData.name}
            />
            <ListItem
              style={styles.list}
              primaryText="Email"
              secondaryText={this.props.userData.email}
            />
            <ListItem
              style={styles.list}
              primaryText="Zodiac Sign"
              secondaryText={this.props.userData.zodiac}
            />
            <ListItem
              style={styles.list}
              primaryText="Date of Birth"
              secondaryText={this.props.userData.birthDate}
            />
            <ListItem
              style={styles.list}
              primaryText="Gender"
              secondaryText={this.props.userData.gender}
            />
            <ListItem
              style={styles.list}
              primaryText="Sexual Orientation"
              secondaryText={this.props.userData.sexualOrientation}
              />
            <ListItem
              style={styles.list}
              primaryText="Bio"
              secondaryText="."
              />
              <p>{this.props.userData.bio}</p>
          </List>

          <RaisedButton
        
            label="Edit Account"
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
    margin: 70
  },
  list: {
    margin: -20
  }
};


const mapStateToProps = state => {
  return { userData: state.userData };
};
export default withRouter(connect(mapStateToProps, null)(AccountDetails));
