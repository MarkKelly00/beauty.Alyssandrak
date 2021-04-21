import React, { useEffect } from "react";
import Header from "../components/header/header.component";
import Footer from "../components/footer/footer";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import FavoriteIcon from '@material-ui/icons/Favorite';
import Gallery from "../components/carousel/hair/carousel.component";
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
              Haircuts & Color Services
            </Typography>
            <Typography
              variant="h7"
              align="center"
              color="textSecondary"
                position="relative"
                paddingBottom="56.10%"
                height="0"
                overflow="hidden"
              paragraph
            >
              <iframe
                src="https://www.youtube.com/embed/GUQKNM-d9k8"
                title="YouTube video player"
                frameborder="0"
                width="100%"
                height="425px"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>

              <ul>
                ** Text consultations required for price estimates. I cannot
                guarantee the estimate to be the final price. It all depends on
                how much time and product is needed to get you closer to your
                goal! **
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
