import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  spinner: {
    display: 'block',
    position: 'fixed',
    zIndex: 1031, 
    top: '40%', 
    right: '48%', 
    }
}));

export default function LoadingScreen() {
  const classes = useStyles();

  return (
    <div className={classes.spinner}>
      <CircularProgress color="secondary" />
    </div>
  );
}