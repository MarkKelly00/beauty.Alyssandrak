import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) =>({
  heroContent: {
    padding: theme.spacing(1, 0, 12),
  }
}));

export default function Hero() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" component="main" className={classes.heroContent}>
    <Typography component="h2" variant="h3" align="center" color="textPrimary" gutterBottom>
      Lovely. A Self Center - Downtown Vancouver
    </Typography>
    <Typography variant="h7" align="center" color="textSecondary" component="p">
    For brow services I am located at Lovely. A Self Center 
    <br />
    903 Main Street, Vancouver, WA, 98660
    <br />
    <b>Thursdays from 9am - 7pm.</b>  Visit my brow page for more information.
    </Typography>
  </Container>
  );
}