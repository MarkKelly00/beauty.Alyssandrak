import React from 'react';
import Header from '../src/components/header/header.component';
import Hero from '../src/components/hero/hero.component';
import Cards from '../src/components/cards/cards.component';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Footer from '../src/components/footer/footer';


const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 2,
      listStyle: 'none',
    },
  },
}));

export default function App() {
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