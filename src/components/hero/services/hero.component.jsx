import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) =>({
  heroContent: {
    // backgroundImage: "linear-gradient(0deg, rgba(252, 154, 224, 0.86), rgba(252, 158, 244, 0.98)), url('https://i.ibb.co/LJ9cHyD/alyk-Logo-BW.png')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    minHeight: '35vh',
    maxWidth: '100%',
    fontFamily: 'Inconsolata',
    padding: theme.spacing(2),
  }
}));

export default function Hero() {
  const classes = useStyles();

  return (
    <Box className={classes.heroContent} boxShadow={3}>
    <Container maxWidth="sm" component="main" className={classes.heroContent} >
    <Typography component="h2" variant="h3" align="center" color="textPrimary" style={{fontFamily: 'Inconsolata'}} gutterBottom>
      Services
    </Typography>
    <Typography variant="h7" align="center" color="textSecondary" component="p">
    -Welcoming clients for lip blush, microblading, and powder brows at my downtown Vancouver location.
    <br /><br />
    -As of November 1st 2020 <b>I am no longer accepting new <u style={{fontSize: 20}}>hair</u> clients.</b> If any openings for new clients come up I will post it on social media and from there it will be first-come-first-serve!
    <br /><br />
    -My schedule has changed. I will be available for hair appointments Monday-Wednesday & Friday. Thursdays & Saturday will be reserved for microblading, powder brows and lip blush.
    </Typography>
  </Container>
  </Box>
  );
}
