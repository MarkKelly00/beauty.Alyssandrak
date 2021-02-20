import React from "react";
import Header from "../components/header/header.component";
import Hero from '../components/hero/contact/contact-hero.component';
import Form from '../components/contact/contact.component';
import Footer from "../components/footer/footer";

export default function Contact() {

  return (
    <React.Fragment>
      <Header />
      <Hero />
      <br />
      <Form />
      <Footer />
    </React.Fragment>
  );
}
