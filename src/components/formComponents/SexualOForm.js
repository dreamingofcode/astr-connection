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

export default function SexualOForm(props) {
  const classes = useStyles();
  
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="sex-native-helper">Sexual Orientation</InputLabel>
        <NativeSelect
          defaultValue={props.values.sexualOrientation}
          onChange={props.handleChange('sexualOrientation')}
          inputProps={{
            name: 'sexualOrientation',
            id: 'sex-native-helper'
          }}
        >
          <option aria-label="None" value="" />
          <option value="heterosexual">Heterosexual</option>
          <option value="homosexual">Homosexual</option>
          <option value="bisexual">Bisexual</option>
          <option value="x">x</option>
        </NativeSelect>
        <FormHelperText>Select your Gender</FormHelperText>
      </FormControl>
    </div>
  );
}
