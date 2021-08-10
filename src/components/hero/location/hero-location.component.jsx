import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) =>({
  heroContent: {
    fontFamily: 'Inconsolata',
    padding: theme.spacing(4, 0, 3),
  }
}));

export default function Hero() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" component="main" className={classes.heroContent}>
    <Typography component="h2" variant="h3" align="center" color="textPrimary" style={{fontFamily: 'Inconsolata'}} gutterBottom>
      My Location
    </Typography>
    <Typography variant="h7" align="center" color="textSecondary" component="p">
    -Now accepting new clients for hair and permanent makeup!
    </Typography>
  </Container>
  );
}
