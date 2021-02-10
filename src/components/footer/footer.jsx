import React from 'react';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import InstagramIcon from '@material-ui/icons/Instagram';
import PhoneIcon from '@material-ui/icons/Phone';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link to="/" color="inherit">
        Beauty.AlyssandraK
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Insta() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
        <a href="https://www.instagram.com/beauty.alyssandrak/?hl=en"><InstagramIcon style={{paddingTop: 5}}/></a>
        <a href="tel:+1-360-772-0226"><PhoneIcon style={{paddingTop: 5}}/></a>
        </Typography>
    )
}

const useStyles = makeStyles((theme) => ({
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        background: '#f576d9',
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
          paddingTop: theme.spacing(6),
          paddingBottom: theme.spacing(6),
        }
    }
  }));

export default function Footer() {
    const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Copyright />
        <Insta />
      </Container>
    </footer>
  );
}