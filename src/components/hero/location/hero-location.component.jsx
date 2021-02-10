import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) =>({
  heroContent: {
    padding: theme.spacing(4, 0, 3),
  }
}));

export default function Hero() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" component="main" className={classes.heroContent}>
    <Typography component="h2" variant="h3" align="center" color="textPrimary" gutterBottom>
      My Locations
    </Typography>
    <Typography variant="h7" align="center" color="textSecondary" component="p">
    -As of November 1st 2020 I am no longer accepting new clients. If any openings for new clients come up I will post it on social media and from there it will be first-come-first-serve!
    </Typography>
  </Container>
  );
}
