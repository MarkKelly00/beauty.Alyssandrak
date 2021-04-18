import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// import Typewriter from 'typewriter-effect';
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
      padding: theme.spacing(2.5),
      paddingRight: 0,
    },
  },
  h1: {
    fontFamily: "'Courier New', serif",
    fontSize: '30px',
    fontWeight: '500',
    textShadow: "2px 1px #fff",
    color: '#000',
    marginLeft: '50px',
    backgroundColor: 'rgba(210, 154, 186, 0.5)',
    padding: '5px 30px',
}
}));

export default function MainFeaturedPost(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.mainFeaturedPost} >
      <Grid container>
          <div className={classes.mainFeaturedPostContent}>
            <Typography className={classes.h1} component="h1" variant="subheading">
              ** Currently Accepting New Permanent Makeup Clients **
            {/* <Typewriter
              options={{
                strings: [
                  `Welcome!!!`,
                  `Weddings, Hair, Makeup, Microblading..`,
                  `I'm your girl`,
                ],
                autoStart: true,
                loop: true,
              }}
            />&#128129;&#128139; &#9986; */}
            </Typography>
          </div>
      </Grid>
    </Paper>
  );
}