import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  spinner: {
    display: 'flex',
    position: 'relative',
    },
  loading: {
    marginLeft: '50%',
    }
}));

export default function LoadingScreen() {
  const classes = useStyles();

  return (
    <div className={classes.spinner}>
      <CircularProgress color="secondary" className={classes.loading}/>
    </div>
  );
}