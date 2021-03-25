import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) =>({
  heroContent: {
    padding: theme.spacing(1, 0, 16),
  }
}));

export default function Hero() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" component="main" className={classes.heroContent}>
    <Typography component="h2" variant="h3" align="center" color="textPrimary" gutterBottom>
      Home Studio
    </Typography>
    <Typography variant="h7" align="center" color="textSecondary" component="p">
    For hair and makeup services I operate out of my home studio in a residential neighborhood! With that being said, I recommend parking along the curb in front of my home. There is plenty of space but please be sure to park in the right direction and close enough to the curb to allow for cars to drive past!
    </Typography>
    <br />
    <Typography variant="h7" align="center" color="textSecondary" component="p" style={{fontWeight: 'bold'}}>
    This is Residential, therefore it's book by appointment only.
    <br />
    No Walk-Ins Appointments, Thank You!
    <br /><br />
    <a href="https://goo.gl/maps/odNUsjYynN943ear8">17006 NE 33rd Ave, Ridgefield WA 98642</a>
    </Typography>
  </Container>
  );
}