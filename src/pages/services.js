import React from 'react';
import Header from '../components/header/header.component';
import Hero from '../components/hero/services/hero.component';
import Cards from '../components/cards/cards.component';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Footer from '../components/footer/footer';


const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 2,
      listStyle: 'none',
    },
  },
}));

export default function Services() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Hero />
      <Cards />
      <Footer />
    </React.Fragment>
  );
}