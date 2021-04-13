import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) =>({
  heroContent: {
    padding: theme.spacing(4, 0, 2),
  },
}));

export default function Hero() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" component="main" className={classes.heroContent}>
    <Typography component="h3" variant="h3" align="center" color="textPrimary" style={{fontFamily: 'Inconsolata'}} gutterBottom>
      Contact Me
    </Typography>
    <Typography variant="h6" align="center" color="textSecondary" style={{fontFamily: 'Inconsolata'}} component="p">
    Feel free to contact me using the form below!
    </Typography>
  </Container>
  );
}