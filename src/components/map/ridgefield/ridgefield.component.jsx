import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) =>({
  heroContent: {
    fontFamily: 'Inconsolata',
    padding: theme.spacing(1, 0, 16),
  }
}));

export default function Hero() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" component="main" className={classes.heroContent}>
    <Typography component="h2" variant="h3" align="center" color="textPrimary" style={{fontFamily: 'Inconsolata'}} gutterBottom>
      Spoiled Salon
    </Typography>
    <Typography variant="h7" align="center" color="textSecondary" component="p">
    - Located in a private room within Spoiled Spa and Salon
    </Typography>
    <br />
    <Typography variant="h7" align="center" color="textSecondary" component="p" style={{fontWeight: 'bold'}}>
    No Walk-Ins Appointments, Thank You!
    <br /><br />
    <a href="https://g.page/Spoiledsalon?share">5500 NE 109th Ct, Vancouver Wa 98662</a>
    </Typography>
  </Container>
  );
}