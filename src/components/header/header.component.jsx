import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        background: '#f576d9'
      },
      toolbar: {
        flexWrap: 'wrap',
      },
      toolbarTitle: {
        flexGrow: 1,
      },
      link: {
        margin: theme.spacing(1, 1.5),
        textDecoration: 'none',
        color: 'black',
        fontFamily: "'Josefin Sans', sans-serif",
      }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            <Link to="/" className={classes.link}>Beauty.AlyssandraK</Link>
          </Typography>
          <nav>
            <Link to="/services" variant="button" color="textPrimary" href="#" className={classes.link}>
              Services
            </Link>
            <Link to="/contact" variant="button" color="textPrimary" href="#" className={classes.link}>
              Contact
            </Link>
            <Link to="/location" variant="button" color="textPrimary" href="#" className={classes.link}>
              My Locations
            </Link>
          </nav>
          <Button href="#" color="default" variant="outlined" className={classes.link}>
            BOOK NOW
          </Button>
        </Toolbar>
        
      </AppBar>
    </React.Fragment>
  );
}