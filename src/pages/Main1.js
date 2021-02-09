import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Logo from '../assets/logo.png';
import { FullscreenExit } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    display: 'flex',
    padding: theme.spacing(3, 0),
  },
}));

export default function Main1(props) {
  const classes = useStyles();
  const { posts, title } = props;

  return (
    <Grid item xs={12} md={8}>
      <iframe width="700" height="415" src="https://www.youtube.com/embed/GUQKNM-d9k8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
    </Grid>
  );
}

Main1.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};