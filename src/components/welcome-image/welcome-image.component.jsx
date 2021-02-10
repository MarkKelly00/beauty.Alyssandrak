import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Typewriter from 'typewriter-effect';

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundAttachment: 'fixed',
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://static.wixstatic.com/media/77c753_ff974db9b1e44798867de93a04e98fdd~mv2_d_2000_1931_s_2.jpg/v1/fill/w_980,h_812,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01/77c753_ff974db9b1e44798867de93a04e98fdd~mv2_d_2000_1931_s_2.webp)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '62vh',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

export default function MainFeaturedPost(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.mainFeaturedPost} >
      <Grid container>
          <div className={classes.mainFeaturedPostContent}>
            <Typography component="h1" variant="subheading" color="textPrimary" style={{height: 200}}>
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