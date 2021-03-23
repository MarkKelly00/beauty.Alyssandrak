import React, { useEffect } from "react";
import Header from "../components/header/header.component";
import Footer from "../components/footer/footer";
import Typography from "@material-ui/core/Typography";
import Box from '@material-ui/core/Box';
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Gallery from '../components/carousel/color/carousel.component';
import Aos from "aos";

import ComboBrow from "../assets/carousel/combination-brows/combinationBrow2.png";
import Microblading from "../assets/carousel/microblading/Microblading3.png";
import PowderBrow from "../assets/carousel/powder-brows/PowderBrow5.png";

import "aos/dist/aos.css";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: "#fca7ea",
    padding: theme.spacing(6, 0, 2),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
    '&:hover': {
      boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"
    }
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

const tiers = [
  {
    title: "Microblading",
    image: Microblading,
    buttonText: "Book Now",
    buttonVariant: "contained",
    buttonLink: "/",
  },
  {
    title: "Powder Brows",
    image: PowderBrow,
    buttonText: "Book Now",
    buttonVariant: "contained",
    buttonLink: "/",
  },
  {
    title: "Combination Brows",
    image: ComboBrow,
    buttonText: "Book Now",
    buttonVariant: "contained",
    buttonLink: "/",
  },
];

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
              gutterBottom
            >
              Color Services
            </Typography>
            <Typography
              variant="h7"
              align="center"
              color="textSecondary"
              paragraph
            >
              <ul>
              My schedule has changed. I will be available for hair appointments Monday-Wednesday & Friday. Thursdays and Saturdays will be reserved for microblading, powder brows and lip blush.
              </ul>
              <ul>
              ONE Saturday a month will be open for hair. Please text me if that is the only day you can and I will let you know if there is an available spot for that month. They go fast.
              </ul>
              <ul>
              ** Text consultations required for price estimates. I cannot guarantee the estimate to be the final price. It all depends on how much time and product is needed to get you closer to your goal!**
              </ul>
            </Typography>
          </Container>
        </Box>
        <Container className={classes.cardGrid} maxWidth="lg">
          <Gallery />
        </Container>
      </main>
      <Footer />
    </React.Fragment>
  );
}
