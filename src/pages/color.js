import React, { useEffect } from "react";
import Header from "../components/header/header.component";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Footer from "../components/footer/footer";
import Typography from "@material-ui/core/Typography";
import Box from '@material-ui/core/Box';
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
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
    description: [""],
    image: Microblading,
    buttonText: "Book Now",
    buttonVariant: "contained",
    buttonLink: "/",
  },
  {
    title: "Powder Brows",
    description: [""],
    image: PowderBrow,
    buttonText: "Book Now",
    buttonVariant: "contained",
    buttonLink: "/",
  },
  {
    title: "Combination Brows",
    description: [""],
    image: ComboBrow,
    buttonText: "Book Now",
    buttonVariant: "contained",
    buttonLink: "/",
  },
];

export default function Color() {
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
                I recommend arriving to your appointment with a full stomach as
                well, our appointment can last up to 3 hours.
              </ul>
              <ul>
                Please do not bring any guests with you, there is no waiting
                room.
              </ul>
            </Typography>
          </Container>
        </Box>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid data-aos="fade-down" container spacing={4}>
            {tiers.map((tier) => (
              <Grid item key={tier.title} xs={12} sm={6} md={4}>
                <Card className={classes.card} >
                  <CardMedia
                    className={classes.cardMedia}
                    image={tier.image}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {tier.title}
                    </Typography>
                    <Typography>
                      <ul>
                        {tier.description.map((line) => (
                          <Typography
                            component="li"
                            variant="subtitle1"
                            align="center"
                            key={line}
                          >
                            {line}
                          </Typography>
                        ))}
                      </ul>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      className={classes.button}
                      fullWidth
                      variant={tier.buttonVariant}
                      color="primary"
                      href={tier.buttonLink}
                    >
                      {tier.buttonText}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <Footer />
    </React.Fragment>
  );
}
