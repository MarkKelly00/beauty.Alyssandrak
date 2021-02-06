import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        background: '#feeeed'
      },
      toolbar: {
        flexWrap: 'wrap',
      },
      toolbarTitle: {
        flexGrow: 1,
      },
      link: {
        margin: theme.spacing(1, 1.5),
      }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            Beauty.AlyssandraK
          </Typography>
          <nav>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Services
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Brows
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
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