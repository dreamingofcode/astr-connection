import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 260
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function NativeSelects() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    gender: '',
    
  });

  const handleChange = event => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value
    });
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="gender-native-helper">Gender</InputLabel>
        <NativeSelect
          value={state.gender}
          onChange={handleChange}
          inputProps={{
            name: 'gender',
            id: 'gender-native-helper'
          }}
        >
          <option aria-label="None" value="" />
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="x">x</option>
        </NativeSelect>
        <FormHelperText>Select your Gender</FormHelperText>
      </FormControl>
    </div>
  );
}
