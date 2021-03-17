import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) =>({
  heroContent: {
    backgroundImage: "linear-gradient(0deg, rgba(252, 154, 224, 0.86), rgba(252, 158, 244, 0.88)), url('http://static1.squarespace.com/static/55458a02e4b0b68214c256b8/t/5545afeae4b07c8a62a438b6/1556984112510/')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    minHeight: '45vh',
    maxWidth: '100%',
    padding: theme.spacing(6, 0, 2),
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
    -Due to not taking new clients, I have disabled my online booking so please reach out via text message to schedule and be sure to pre book at the end of your appointment!
    <br /><br />
    -My schedule has changed. I will be available for hair appointments Monday-Wednesday & Friday, and Thursdays will be reserved for microblading, powder brows and eyelash extensions.
    </Typography>
  </Container>
  );
}
