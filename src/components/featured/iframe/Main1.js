import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  iframe: {
    display: 'flex',
  },
}));

export default function Main1() {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={8} className={classes.iframe}>
      <iframe title="video-tour" width="700" height="415" src="https://www.youtube.com/embed/GUQKNM-d9k8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
    </Grid>
  );
}