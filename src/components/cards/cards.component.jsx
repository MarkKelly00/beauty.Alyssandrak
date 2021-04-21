import React, { useEffect } from 'react';
import Aos from 'aos';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Container from '@material-ui/core/Container';
import FavoriteIcon from '@material-ui/icons/Favorite';
import 'aos/dist/aos.css';

import './cards.styles.scss';

const useStyles = makeStyles((theme) => ({
  cardHeader: {
    backgroundColor: '#f576d9'
  },
  cardGrid: {
    position: 'relative',
    paddingTop: theme.spacing(5),
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
    top: '-35px',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  button: {
    backgroundColor: '#fca7ea',
    textShadow: '1px 1px #000000'
  }
}));

const tiers = [
    {
      title: 'Microblading',
      subheader: 'Eyebrows / Lips',
      description: ['Lip Blush | $350', '8-10 week perfecting touch up | $100', 'Annual touch up | $250', 'Classic microblading | $450', 'Powder/makeup or ombre  |  $550', 'Combination microblading & shading  |  $650', '4-8 week perfecting touch up  |  $100', 'Annual touch up  |  $250'],
      buttonText: 'More Info',
      buttonVariant: 'contained',
      buttonLink: '/brows'
    },
    {
      title: 'Events / Weddings',
      subheader: 'Hair & Makeup',
      description: [
        'Bridal Makeup  |  $185',
        'Bridal Hair  |  $165',
        'Event Makeup  |  $100',
        'Event Hair  |  $65',
        'Travel Fee  |  $25+',
        '**All makeup services include a touch up kit and false lashes**'
      ],
      buttonText: 'More Info',
      buttonVariant: 'contained',
      buttonLink: '/events'
    },
    {
      title: 'Color Services',
      subheader: 'Text consultation ** required for price',
      description: [
        'Highlights  |  $165+ Partial  |  $145+',
        'Balayage  |  $150+',
        'Lowlights  |  $115+ Partial  |  $85+',
        'Platinum  |  $200+',
        'Platinum Retouch  |  $100+',
        'Root Retouch  |  $70+',
        'All Over Color  |  $85+'
      ],
      buttonText: 'More Info',
      buttonVariant: 'contained',
      buttonLink: '/hair'
    },
    {
      title: 'Haircuts',
      subheader: 'Hair Treatments Available - Service Add-Ons $30',
      description: [
        'Women\'s  |  $50',
        'Men\'s  |  $25',
        'Lil\' Girls  |  $20 (up to 12 years young)',
        'Lil\' Boys  |  $15 (up to 12 years young)',
        'Bang Trim  |  $15'
      ],
      buttonText: 'More Info',
      buttonVariant: 'contained',
      buttonLink: '/hair'
    }
  ];

export default function Cards() {
  useEffect(() => {
    Aos.init({offset: 200, duration: 1000});
  }, [])

  const classes = useStyles();

  return (
    <Container maxWidth="lg" component="main" className={classes.cardGrid}>
        <div className={classes.numCircles}><FavoriteIcon fontSize='large' style={{marginTop: 2}}/></div>
        <Grid container spacing={2} alignItems="flex-start">
          {tiers.map((tier) => (
            
            <Grid data-aos="fade-down" item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={3}>
              <Card className="card">
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro'}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button className={classes.button} fullWidth variant={tier.buttonVariant} color="primary" href={tier.buttonLink}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      <Container>
        <br /><br />
        <Typography data-aos="fade-up" variant="body1" align="center" color="textSecondary" style={{fontFamily: 'Inconsolata'}} component="span">
        ** Text consultations required for price estimates. I cannot guarantee the estimate to be the final price. It all depends on how much time and product is needed to get you closer to your goal!**
        </Typography>
      </Container>
      </Container>
  );
}