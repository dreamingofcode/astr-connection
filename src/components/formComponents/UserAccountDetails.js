import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import logo from '../../assets/images/logo.png';
import axios from 'axios'
class UserAccountDetails extends Component {
  continue = (event) => {
    event.preventDefault();
    this.props.nextStep();
    console.log('this.state', this.state);
  };
  back = (event) => {
    event.preventDefault();
    this.props.prevStep();
  };
//   state = {
//     img: null,
//   };
  render() {
    const { values, handleChange } = this.props;

    const fileSelected = (event) => {
      console.log(event.target.files[0]);
    //   this.setState({
    //     img: event.target.files[0],
    //   });
    };
    const fileUpload = () => {
        // const fd=new FormData()
        // fd.append('image',this.state.img,this.state.img.name)
        // axios.post(localhost,fd)
        // .then(resp=>resp.json())
        // .then(data=>{
        //     console.log("imgae upload",data)
        // })
    };
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <div className="login-form">
            <img src={logo} alt="logo" height="170px" />
            <h1>Sign-up Form</h1>
           
            <div>
              <input
                type="file"
                // onChange={handleChange('img')}
                // defaultValue={values.img}
                // onChange={this.fileSelected}
                // defaultValue={values.img}
              />
              <button onClick={this.fileUpload}>Upload</button>
            </div>
            <br />

            <RaisedButton
              label="Back"
              primary={false}
              style={styles.button}
              onClick={this.back}
            />
            <RaisedButton
              label="Continue"
              primary={true}
              style={styles.button}
              onClick={this.continue}
            />
          </div>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
const styles = {
  button: {
    margin: 15,
  },
};

export default UserAccountDetails;
