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
import BrowLocation from '../assets/browLocation.png';

import 'aos/dist/aos.css';


  
  const featuredPosts = [
    {
      title: 'Mission Statement',
      sub: 'I am a wife, a mother, a daughter, a sister, a friend AND an artist.',
      description:
        'When you step into my studio you are given the same level of respect, honesty & care that I give my family. I strive to make sure that by the time my client leaves my chair they feel that they have been truly heard, understood, & respected. By the time my client leaves my chair they should be feeling and looking like the absolute BEST version of themselves possible.',
      image: 'https://static.wixstatic.com/media/77c753_9d9d3f09839a4c0daea3f8668ad7430a~mv2.jpg/v1/fill/w_564,h_517,fp_0.50_0.50,q_80/77c753_9d9d3f09839a4c0daea3f8668ad7430a~mv2.webp',
      imageText: 'Image Text',
    },
    {
      title: 'Contact Me!',
      sub: '(360)772-0226',
      description:
        'The best way to reach me is text messaging, email, or instagram DM. The fastest way to get ahold of me is text, but in general, please allow 24-48 hours for a response!',
      image: BrowLocation,
      imageText: 'beauty.alyssandrak@gmail.com',
    },
  ];
  
  
  const sidebar = {
    bookings: [
      { title: 'Monday: 10am-6pm', url: '#' },
      { title: 'Tuesday: 10am-6pm', url: '#' },
      { title: 'Wednesday: 10am-6pm', url: '#' },
      { title: 'Thursday: 9am-8pm (BROW/LASH DAY)', url: '#' },
      { title: 'Friday: 9am-10pm', url: '#' },
      { title: 'Saturday: OFF', url: '#' },
      { title: 'Sunday: OFF', url: '#' }
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