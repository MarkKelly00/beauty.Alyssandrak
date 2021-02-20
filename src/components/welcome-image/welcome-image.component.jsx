import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Typewriter from 'typewriter-effect';
import AlyK from '../../assets/alyk.png';

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundAttachment: 'fixed',
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: `url(${AlyK})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '62vh',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(4),
      paddingRight: 0,
    },
  },
  h1: {
    fontFamily: "'Courier New', serif",
    fontSize: '40px',
    textShadow: "2px 2px #ffffff",
}
}));

export default function MainFeaturedPost(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.mainFeaturedPost} >
      <Grid container>
          <div className={classes.mainFeaturedPostContent}>
            <Typography className={classes.h1} component="h1" variant="subheading" color="textPrimary" style={{height: 200}}>
            <Typewriter
              options={{
                strings: [
                  `Welcome!!!`,
                  `Weddings, Hair, Makeup, Microblading..`,
                  `I'm your girl`,
                ],
                autoStart: true,
                loop: true,
              }}
            />&#128129;&#128139; &#9986;
            </Typography>
          </div>
      </Grid>
    </Paper>
  );
}