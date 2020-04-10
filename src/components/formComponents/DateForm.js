import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 265,
  },
}));

export default function DatePickers(props) {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate>
      <TextField
        id="date"
        label="Enter your Birthday"
        type="date"
        className={classes.textField}
        onChange={props.handleChange('birthDate')}
        defaultValue={props.values.birthDate}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}