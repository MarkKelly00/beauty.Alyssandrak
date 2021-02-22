import React from 'react';
import Header from '../components/header/header.component';
import Hero from '../components/hero/services/hero.component';
import Cards from '../components/cards/cards.component';
import Footer from '../components/footer/footer';

export default function Services() {


  return (
    <React.Fragment>
      <Header />
      <Hero />
      <Cards />
      <Footer />
    </React.Fragment>
  );
}