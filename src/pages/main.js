import React, { useEffect } from 'react';
import Header from '../components/header/header.component';
import Aos from 'aos';
import Footer from '../components/footer/footer';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import MainFeaturedPost from '../components/welcome-image/welcome-image.component';
import FeaturedPost from '../components/featured/Featured.component';
import Main1 from '../components/featured/iframe/Main1';
import Sidebar from '../components/sidebar/Sidebar.component';
import InstagramIcon from '@material-ui/icons/Instagram';
import FamilyPic from '../assets/JSP_8824.jpg';
import profilePic from '../assets/DSC00172.jpg';

import 'aos/dist/aos.css';
  
  const featuredPosts = [
    {
      title: 'Mission Statement',
      sub: 'I am a wife, a mother, a daughter, a sister, a friend AND an artist.',
      description:
        'When you step into my studio you are given the same level of respect, honesty & care that I give my family. I strive to make sure that by the time my client leaves my chair they feel that they have been truly heard, understood, & respected. By the time my client leaves my chair they should be feeling and looking like the absolute BEST version of themselves possible.',
      image: FamilyPic,
      imageText: 'My Family',
    },
    {
      title: 'Contact Me!',
      sub: '(360)772-0226',
      description:
        'The best way to reach me is text messaging, email, or instagram DM. The fastest way to get ahold of me is text or click here to submit a contact form. In general, please allow 24-48 hours for a response!',
      image: profilePic,
      imageText: 'beauty.alyssandrak@gmail.com',
    },
  ];
  
  
  const sidebar = {
    bookings: [
      { title: 'Monday: 10am-7pm', url: 'https://square.site/book/DBZVBRD8VF6MK/beauty-alyssandrak-ridgefield-wa' },
      { title: 'Tuesday: 10am-7pm', url: 'https://square.site/book/DBZVBRD8VF6MK/beauty-alyssandrak-ridgefield-wa' },
      { title: 'Wednesday: 10am-7pm', url: 'https://square.site/book/DBZVBRD8VF6MK/beauty-alyssandrak-ridgefield-wa' },
      { title: 'Thursday: 9am-8pm (BROW/LASH DAY)', url: 'https://square.site/book/LR4716B541B83/lovely-a-self-center-vancouver-wa' },
      { title: 'Friday: 10am-8pm', url: 'https://square.site/book/DBZVBRD8VF6MK/beauty-alyssandrak-ridgefield-wa' },
      { title: 'Saturday: 9am-8pm (BROW/LASH DAY)', url: 'https://square.site/book/LR4716B541B83/lovely-a-self-center-vancouver-wa' },
      { title: 'Sunday: OFF', url: 'https://square.site/book/DBZVBRD8VF6MK/beauty-alyssandrak-ridgefield-wa' }
    ],
    social: [
      { name: 'Instagram', icon: InstagramIcon },
    ],
  };


export default function Main() {
  useEffect(() => {
    Aos.init({offset: 300, duration: 2000});
  }, [])



  return (
    <React.Fragment>
      <Header />
      <br />
      <Container maxWidth="lg">
        <main>
          <MainFeaturedPost />
          <Grid data-aos="fade-left" container spacing={5} >
            <Main1 />
            <Sidebar
              bookings={sidebar.bookings}
              social={sidebar.social}
            />
          </Grid>
          <Grid data-aos="fade-up" container spacing={4} >
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          
        </main>
      </Container>
      <Footer />
    </React.Fragment>
  );
}