import React, { useEffect } from "react";
import Header from "../components/header/header.component";
import Footer from "../components/footer/footer";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import FavoriteIcon from '@material-ui/icons/Favorite';
import Gallery from "../components/carousel/events/carousel.component";
import Aos from "aos";

import "aos/dist/aos.css";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    fontFamily: 'Inconsolata',
    backgroundColor: "#fca7ea",
    padding: theme.spacing(6, 0, 2),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    position: 'relative',
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  numCircles: {
    width: 39.4,
    height: 39.4,
    borderRadius: '50%',
    textAlign: 'center',
    border: '2px solid #feb8ee',
    color: 'white',
    backgroundColor: "#f588d9",
    position: 'absolute',
    top: '-20px',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  card: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
    "&:hover": {
      boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
    },
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  button: {
    backgroundColor: "#fca7ea",
    textShadow: "1px 1px #000000",
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


export default function Events() {
  const classes = useStyles();
  useEffect(() => {
    Aos.init({ offset: 200, duration: 2000 });
  }, []);

  return (
    <React.Fragment>
      <Header />
      <main>
        <Box className={classes.heroContent} boxShadow={3}>
          <Container maxWidth="md">
            <Typography
              component="h1"
              variant="h3"
              align="center"
              color="textPrimary"
              style={{fontFamily: 'Inconsolata'}}
              gutterBottom
            >
              Weddings & Events
            </Typography>
            <Typography
              variant="h7"
              align="center"
              color="textSecondary"
              paragraph
            >
              <iframe
                title="vimeo-player"
                src="https://player.vimeo.com/video/393721208"
                width="100%"
                height="320px"
                frameborder="0"
                allowfullscreen
              ></iframe>
              <ul>
                **All makeup services include a touch up kit and false lashes**
              </ul>
              <ul>
                Bridal parties larger than 4-5 services will be referred to
                GlamourisePDX. I contract myself out to them and cannot manage
                large parties on my own. The owner will coordinate a team to fit
                your needs. be sure to request me.♡
              </ul>
            </Typography>
          </Container>
        </Box>
        <Container className={classes.cardGrid} maxWidth="lg">
        <div className={classes.numCircles}><FavoriteIcon fontSize='large' style={{marginTop: 2}}/></div>
          <Gallery />
        </Container>
      </main>
      <Footer />
    </React.Fragment>
  );
}
