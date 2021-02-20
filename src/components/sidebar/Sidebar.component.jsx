import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import JuneBug from '../../assets/junebug.png';

const useStyles = makeStyles((theme) => ({
  sidebarAboutBox: {
    padding: theme.spacing(2),
    overflow: 'hidden',
    backgroundColor: '#f285da',
    maxWidth: 350
  },
  sidebarSection: {
    marginTop: theme.spacing(2),
  },
  image: {
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundSize: 'cover',
    maxWidth: 300
  }
}));

export default function Sidebar(props) {
  const classes = useStyles();
  const { bookings, social } = props;

  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0} className={classes.sidebarAboutBox}>
        <img src={JuneBug}className={classes.image} alt="juneBugAward"/>
      </Paper>
      <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        Book With Me!
      </Typography>
      {bookings.map((booking) => (
        <Link display="block" variant="body1" href={booking.url} key={booking.title}>
          {booking.title}
        </Link>
      ))}
      <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        Social
      </Typography>
      {social.map((network) => (
        <Link display="block" variant="body1" href="https://www.instagram.com/beauty.alyssandrak/?hl=en" key={network}>
          <Grid container direction="row" spacing={1} alignItems="center">
            <Grid item>
              <network.icon />
            </Grid>
            <Grid item>{network.name}</Grid>
          </Grid>
        </Link>
      ))}
    </Grid>
  );
}

Sidebar.propTypes = {
  bookings: PropTypes.array,
  description: PropTypes.string,
  social: PropTypes.array,
  title: PropTypes.string,
};