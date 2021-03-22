import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Background from '../../../assets/alykLogo.png';

const useStyles = makeStyles((theme) =>({
  heroContent: {
    backgroundImage: "linear-gradient(0deg, rgba(252, 154, 224, 0.86), rgba(252, 158, 244, 0.98)), url('https://i.ibb.co/LJ9cHyD/alyk-Logo-BW.png')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    minHeight: '45vh',
    maxWidth: '100%',
    padding: theme.spacing(6),
  }
}));

export default function Hero() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" component="main" className={classes.heroContent}>
    <Typography component="h2" variant="h3" align="center" color="textPrimary" gutterBottom>
      Services
    </Typography>
    <Typography variant="h7" align="center" color="textSecondary" component="p">
    -As of November 1st 2020 I am no longer accepting new clients. If any openings for new clients come up I will post it on social media and from there it will be first-come-first-serve!
    <br /><br />
    -My schedule has changed. I will be available for hair appointments Monday-Wednesday & Friday. Thursdays & Saturday will be reserved for microblading, powder brows and lip blush.
    </Typography>
  </Container>
  );
}
