import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) =>({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  }
}));

export default function MainHero() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" component="main" className={classes.heroContent}>
    <Typography component="h2" variant="h3" align="center" color="textPrimary">
      Welcome
    </Typography>
    <iframe title="vimeo-player" src="https://player.vimeo.com/video/393721208" width="640" height="360" frameborder="0" allowfullscreen />
    <Typography variant="h7" align="center" color="textSecondary" component="p">
    I am a wife, a mother, a daughter, a sister, a friend AND an artist. All of these traits are deeply connected. 
    <br /><br />
    When you step into my studio you are given the same level of respect, honesty & care that I give my family.
I strive to make sure that by the time my client leaves my chair they feel that they have been truly heard, understood, & respected. By the time my client leaves my chair they should be feeling and looking like the absolute BEST version of themselves possible. 
    </Typography>
  </Container>
  );
}
