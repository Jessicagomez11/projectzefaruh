import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    free: 0,
    $: 0,
    $$: 0,
    $$$: 0,
  });

  const inputLabel = React.useRef(null);
 
  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <form className={classes.root} autoComplete="off">
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-simple">Price Range</InputLabel>
        <Select
          value={values.priceRange}
          onChange={handleChange}
          inputProps={{
            name: 'price',
            id: 'price-simple',
          }}
        >
          <MenuItem value={0}>Free</MenuItem>
          <MenuItem value={20}>$</MenuItem>
          <MenuItem value={30}>$$</MenuItem>
          <MenuItem value={100}>$$$</MenuItem>
        </Select>
      </FormControl>
      
    </form>
  );
}