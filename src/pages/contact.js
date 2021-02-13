import React, { useEffect } from "react";
import Aos from 'aos';
import Header from "../components/header/header.component";
import Hero from '../components/hero/contact/contact-hero.component';
import Form from '../components/contact/contact.component';
import Footer from "../components/footer/footer";
import 'aos/dist/aos.css';

export default function Contact() {
    useEffect(() => {
        Aos.init({offset: 300, duration: 2000});
      }, [])

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
