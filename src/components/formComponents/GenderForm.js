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

export default function GenderForm(props) {
  const classes = useStyles();

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="gender-native-helper">Gender</InputLabel>
        <NativeSelect
         defaultValue={props.values.gender}
          onChange={props.handleChange('gender')}
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
