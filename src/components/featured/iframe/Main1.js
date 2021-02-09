import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    display: 'flex',
    padding: theme.spacing(3, 0),
  },
}));

export default function Main1() {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={8}>
      <iframe width="700" height="415" src="https://www.youtube.com/embed/GUQKNM-d9k8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
    </Grid>
  );
}