import React from "react";
import Header from "../components/header/header.component";
import Hero from "../components/hero/location/hero-location.component";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Footer from "../components/footer/footer";
import RidgeData from "../components/map/ridgefield/ridge-data.component";
import LovelyData from "../components/map/lovely/lovely-data.component";
import Lovely from "../components/map/lovely/lovely.component";
import Ridgefield from "../components/map/ridgefield/ridgefield.component";

export default function Services() {

  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Hero />
      <Grid container direction="row" justify="flex-start" alignItems="center">
        <RidgeData />
        <Ridgefield />
      </Grid>
      <br />
      <Grid container direction="row" justify="flex-end" alignItems="center">
        <Lovely />
        <LovelyData />
      </Grid>
      <Footer />
    </React.Fragment>
  );
}
