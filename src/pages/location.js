import React, { useEffect } from "react";
import Aos from 'aos';
import Header from "../components/header/header.component";
import Hero from "../components/hero/location/hero-location.component";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Footer from "../components/footer/footer";
import RidgeData from "../components/map/ridgefield/ridge-data.component";
import LovelyData from "../components/map/lovely/lovely-data.component";
import Lovely from "../components/map/lovely/lovely.component";
import Ridgefield from "../components/map/ridgefield/ridgefield.component";
import 'aos/dist/aos.css';

export default function Services() {
    useEffect(() => {
        Aos.init({offset: 300, duration: 2000});
      }, [])

  return (
    <React.Fragment>
      <Header />
      <Hero />
      <br />
      <Paper style={{backgroundColor: '#fcb7ea'}}>
      <Grid data-aos="fade-left" container direction="row" justify="flex-start" alignItems="center">
        <RidgeData />
        <Ridgefield />
      </Grid>
      </Paper>
      <br />
      <Paper style={{backgroundColor: '#fcb7ea'}}>
      <Grid data-aos="fade-right" container direction="row" justify="flex-end" alignItems="center">
        <Lovely />
        <LovelyData />
      </Grid>
      </Paper>
      <Footer />
    </React.Fragment>
  );
}
