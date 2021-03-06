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
import FavoriteIcon from '@material-ui/icons/Favorite';
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
    fontFamily: 'Inconsolata',
    padding: theme.spacing(2),
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
    description: ["A highly accurate, semi-permanent form of cosmetic tattoo. It fills in sparse eyebrows in a natural-looking way, creating the illusion of more hairs on the brow."],
    image: Microblading,
    buttonText: "Book Now",
    buttonVariant: "contained",
    buttonLink: "https://square.site/book/LR4716B541B83/lovely-a-self-center-vancouver-wa",
  },
  {
    title: "Powder Brows",
    description: ["A cosmetic semi permanent makeup technique designed to create eyebrows with soft powder effect, very similar to powder makeup. Powder effect is done with a shading technique using a permanent makeup device."],
    image: PowderBrow,
    buttonText: "Book Now",
    buttonVariant: "contained",
    buttonLink: "https://square.site/book/LR4716B541B83/lovely-a-self-center-vancouver-wa",
  },
  {
    title: "Combination Brows",
    description: ["A form of permanent makeup (cosmetic tattoo), where both the Microblading technique and Powder/shading are combined. This technique is great for those who have sparse eyebrows, little to no hair, or those who simply want to add definition to their eyebrows and arch."],
    image: ComboBrow,
    buttonText: "Book Now",
    buttonVariant: "contained",
    buttonLink: "https://square.site/book/LR4716B541B83/lovely-a-self-center-vancouver-wa",
  },
];

export default function Brows() {
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
              variant="h4"
              align="center"
              color="textPrimary"
              style={{fontFamily: 'Inconsolata', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'wrap'}}
              gutterBottom
            >
              #BrowsbyAlyssandra
            </Typography>
            <Typography
              variant="h7"
              align="center"
              color="textSecondary"
              paragraph
            >
              <ul>
                A $100 deposit must be taken to reserve your appointment date
                and time. This can be taken via Venmo or Card over the phone.
              </ul>
              <ul>
                You must be 18+ to receive this service you are not pregnant or
                breastfeeding at the time of our appointment.
              </ul>
              <ul>No Caffeine or exercise the day of our appointment.</ul>
              <ul>Avoid any Alcohol use for 24 hours prior to treatment.</ul>
              <ul>
                Avoid any blood thinning medications for 48 hours prior to
                treatment. This includes, but is not limited to fish oils,
                tylenol, ibuprofen, or medication that raises blood pressure.{" "}
                <b>THIS IS EXTREMELY IMPORTANT!</b>
              </ul>
              <ul>
                Stop using any retinol creams or chemical peels 72 hours prior
                to treatment.
              </ul>
              <ul>
                Botox appointments must be at least two weeks before treatment
                and at least two weeks after treatment.
              </ul>
              <ul>Stay hydrated, it will help with color retention!</ul>
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
        <Container className={classes.cardGrid} maxWidth="lg">
          {/* End hero unit */}
          <div className={classes.numCircles}><FavoriteIcon fontSize='large' style={{marginTop: 2}}/></div>
          <Grid data-aos="fade-down" container spacing={2}>
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
                      target="_blank"
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
