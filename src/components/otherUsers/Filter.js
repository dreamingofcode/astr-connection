import * as React from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import filters from './filters';
class Filter extends React.Component {
  state = {
    toggle: false,
    male: false,
    female: false,
    x: false,
    heterosexual: false,
    homosexual: false,
    bisexual: false,
    friends: false,
    compatible: false,
    nearBy: false,
    filteredUsers: [],
    initialFilter: [],
    secondFilter: [],
  };
  componentDidMount() {
    // this.setState({
    //   allUsers: this.props.users,
    // });
    console.log('dd', this.state.male);
  }
  filterToggle = (event) => {
    this.setState({
      toggle: !this.state.toggle,
    });
  };

  handleFiltering = (event) => {
    //     if (this.props.users) {
    //       let category = event.target.value.split(' ')[1];
    //       let filter = event.target.value.split(' ')[0];
    //       let isChecked = event.target.checked
    //        this.setState({
    //          [filter]: isChecked
    //        })

    //        let maleOnly= this.props.users.filter((user) => {
    //         return user.gender === "male";
    //      });
    // let femaleOnly= this.props.users.filter((user) => {
    //        return user.gender === "female";
    //     });
    // let nonBinaryOnly= this.props.users.filter((user) => {
    //      return user.gender === "x";
    //   });
    // let maleAndFemale = this.props.users.filter((user) => {
    //  return user.gender !== "x";
    // });
    // let nonBinaryAndFemale = this.props.users.filter((user) => {
    // return user.gender !== "male";
    // });
    // let nonBinaryAndMale = this.props.users.filter((user) => {
    // return user.gender !== "female";
    // });

    // let heteroOnly= this.props.users.filter((user) => {
    // return user.sexualOrientation === "heterosexual";
    // });
    // let homoOnly= this.props.users.filter((user) => {
    // return user.sexualOrientation === "homosexual";
    // });
    // let biOnly= this.props.users.filter((user) => {
    // return user.sexualOrientation === "bisexual";
    // });

    // let heteroMale= maleOnly.filter(user=>{
    // return user.sexualOrientation === "heterosexual"
    // })
    // let heteroFemale = femaleOnly.filter(user=>{
    // return user.sexualOrientation === "heterosexual"
    // })
    // let heteroNonBinary= nonBinaryOnly.filter(user=>{
    // return user.sexualOrientation === "heterosexual"
    // })

    // let homoMale= maleOnly.filter(user=>{
    // return user.sexualOrientation === "homosexual"
    // })
    // let homoFemale = femaleOnly.filter(user=>{
    // return user.sexualOrientation === "homosexual"
    // })
    // let homoNonBinary= nonBinaryOnly.filter(user=>{
    // return user.sexualOrientation === "homosexual"
    // })

    // let biMale= maleOnly.filter(user=>{
    // return user.sexualOrientation === "bisexual"
    // })
    // let biFemale = femaleOnly.filter(user=>{
    // return user.sexualOrientation === "bisexual"
    // })
    // let biNonBinary= nonBinaryOnly.filter(user=>{
    // return user.sexualOrientation === "bisexual"
    // })
    //   const {male,female,x,heterosexual,homosexual,bisexual}=this.state
    // if(male && heterosexual){
    //   this.props.filteredUsers1(heteroMale);
    // } else if (female && heterosexual){
    //   this.props.filteredUsers1(heteroFemale);
    // }else if (x && heterosexual){
    //   this.props.filteredUsers1(heteroNonBinary);
    // }else if (male && homosexual){
    //   this.props.filteredUsers1(homoMale);
    // }else if (female && homosexual){
    //   this.props.filteredUsers1(homoFemale);
    // }else if (x && homosexual){
    //   this.props.filteredUsers1(homoNonBinary);
    // }else if (male && bisexual){
    //   this.props.filteredUsers1(biMale);
    // }else if (female && bisexual){
    //   this.props.filteredUsers1(biFemale);
    // }else if (x && bisexual){
    //   this.props.filteredUsers1(biNonBinary);
    // }else if (filter === "male" || male){
    //   this.props.filteredUsers1(maleOnly);
    // }else if (female){
    //   this.props.filteredUsers1(femaleOnly);
    // }else if (x){
    //   this.props.filteredUsers1(nonBinaryOnly);
    // }

    // filters(category, filter,this.state)

    // event.preventDefault()
    if (this.props.users) {
      let category = event.target.value.split(' ')[1];
      let filter = event.target.value.split(' ')[0];
      if (category === 'gender') {
        if (event.target.checked) {
          //first filter

          let filteredUsers = this.props.users.filter((user) => {
            return user.gender === filter;
          });
          let newestArray = this.state.filteredUsers.concat(filteredUsers);
          this.setState({
            [filter]: event.target.checked,
            filteredUsers: newestArray,
            initialFilter: newestArray,
          });
          this.props.filteredUsers1(newestArray);

          // if(this.state.initialFilter)
        } else if (!event.target.checked) {
          let unfilteredArray = this.props.filteredUsers.filter((user) => {
            return user.gender !== filter;
          });
          this.setState({
            [filter]: event.target.checked,
            filteredUsers: unfilteredArray,
            initialFilter: unfilteredArray,
          });
          this.props.filteredUsers1(unfilteredArray);
        }
      } else if (category === 'sexual-orientation') {
        if (event.target.checked) {
          if (this.props.filteredUsers) {
            //second filter=>2
            if (this.state.initialFilter.length > 0) {
              let filteredUsers2 = this.state.initialFilter.filter((user) => {
                return user.sexualOrientation === filter;
              });
              // let newestArray = this.state.filteredUsers.concat(filteredUsers);
              this.setState({
                [filter]: event.target.checked,
                filteredUsers: filteredUsers2,
                secondFilter: filteredUsers2,
              });
              this.props.filteredUsers1(filteredUsers2);

              // let newestArray = this.state.filteredUsers.concat(filteredUsers);
              if (filteredUsers2.length === 0) {
                alert('No Matches');
                this.setState({
                  initialFilter: [],
                  filteredUsers: [],
                  [filter]: event.target.checked,
                });
              }
            }
          } else {
            //the first time filtered! =>1
            let filteredUsers = this.props.users.filter((user) => {
              return user.sexualOrientation === filter;
            });
            let newestArray = this.state.filteredUsers.concat(filteredUsers);
            this.setState({
              [filter]: event.target.checked,
              filteredUsers: newestArray,
              initialFilter: newestArray,
            });
            this.props.filteredUsers1(newestArray);
          }
        } else if (!event.target.checked) {
          if (this.props.filteredUsers && !this.state.secondFilter) {
            //first UNfilter

            this.setState({
              [filter]: event.target.checked,
              filteredUsers: null,
              initialFilter: [],
            });
            this.props.filteredUsers1(null);
            if (this.state.secondFilter) {
              //second Unfilter
              let Unfiltered2 = this.state.secondFilter.filter((user) => {
                return user.sexualOrientation !== filter;
              });
              this.setState({
                [filter]: event.target.checked,
                filteredUsers: Unfiltered2,
                secondFilter: Unfiltered2,
              });
            }
          } else {
            let unfilteredArray = this.props.filteredUsers.filter((user) => {
              return user.sexualOrientation !== filter;
            });
            this.setState({
              [filter]: event.target.checked,
              filteredUsers: unfilteredArray,
              initialFilter: unfilteredArray,
            });
            this.props.filteredUsers1(unfilteredArray);
          }
        }
      }
    }
    console.log(this.state);
  };
  render() {
    return (
      <React.Fragment>
        <MuiThemeProvider>
          <RaisedButton
            label="Filter Users"
            primary={true}
            // style={styles.button}
            onClick={() => this.filterToggle()}
          />
        </MuiThemeProvider>
        <div className="col-sm-12">
          {this.state.toggle ? (
            <form className="filter col-sm-12" noValidate>
              <div className="row justify-content-start">
                <div className="col-4  col-xs-12">
                  <div className="flex-item1">
                    <h3>Gender</h3>
                    <h6>
                      <input
                        type="checkbox"
                        onChange={(event) => this.handleFiltering(event)}
                        value="male gender"
                      />{' '}
                      Male
                    </h6>

                    <h6>
                      <input
                        onChange={this.handleFiltering}
                        type="checkbox"
                        value="female gender"
                      />{' '}
                      Female
                    </h6>

                    <h6>
                      <input
                        onChange={this.handleFiltering}
                        type="checkbox"
                        value="x gender"
                      />{' '}
                      Non-Binary
                    </h6>
                  </div>
                </div>

                <div className="col-4  col-xs-12">
                  <div className="flex-item">
                    <h3>Sexual Orientation</h3>
                    <h6>
                      <input
                        disabled={this.state.homosexual || this.state.bisexual}
                        onChange={this.handleFiltering}
                        type="checkbox"
                        value="heterosexual sexual-orientation"
                      />{' '}
                      Heterosexual
                    </h6>

                    <h6 className="form-h6" htmlFor="sortorder">
                      <input
                        disabled={
                          this.state.heterosexual || this.state.bisexual
                        }
                        onChange={this.handleFiltering}
                        type="checkbox"
                        value="homosexual sexual-orientation"
                      />{' '}
                      Homesexual
                    </h6>

                    <h6 className="form-h6" htmlFor="sortorder">
                      <input
                        disabled={
                          this.state.homosexual || this.state.heterosexual
                        }
                        type="checkbox"
                        onChange={this.handleFiltering}
                        value="bisexual sexual-orientation"
                      />{' '}
                      Bisexual
                    </h6>
                  </div>
                </div>
                <div className="col-3 ">
                  <div className="flex-item">
                    <h3>Specific Filtering</h3>
                    <h6>
                      <input
                        disabled={true}
                        onChange={this.handleFiltering}
                        type="checkbox"
                        value="dates"
                      />{' '}
                      Here for Dates
                    </h6>
                    <h6>
                      <input
                      disabled={true}
                        onChange={this.handleFiltering}
                        type="checkbox"
                        value="friends"
                      />{' '}
                      Here for Friends
                    </h6>
                    <h6>
                      <input
                      disabled={true}
                        onChange={this.handleFiltering}
                        type="checkbox"
                        value="compatible"
                      />{' '}
                      Most Compatible
                    </h6>

                    <h6>
                      <input
                      disabled={true}
                        onChange={this.handleFiltering}
                        type="checkbox"
                        value="nearBy"
                      />{' '}
                      Nearest Me
                    </h6>
                  </div>
                </div>
              </div>
            </form>
          ) : null}
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    users: state.users,
    usersLoading: state.usersLoading,
    filteredUsers: state.filteredUsers,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    filteredUsers1: (userData) => {
      const action = {
        type: 'FILTERED_USERS',
        payload: userData,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
