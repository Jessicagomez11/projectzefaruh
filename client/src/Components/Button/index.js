import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Fab from '@material-ui/core/Fab';


import Search from '@material-ui/icons/Search';


const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(10),
    padding: theme.spacing(0,4)
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function SearchButton(props) {
    console.log(`props: ${props}`)
  const classes = useStyles();

  return (
    
      <div>
        
        <Fab variant="extended" color="primary" aria-label="Add" className={classes.margin} onClick={props.onClick}>
          <Search className={classes.extendedIcon}  />
          Search
        </Fab>
      </div>
      
   
  );
}