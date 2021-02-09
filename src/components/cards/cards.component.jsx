import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Container from '@material-ui/core/Container';

import './cards.styles.scss';

const useStyles = makeStyles((theme) => ({
  cardHeader: {
    backgroundColor: '#f8bbd0'
  },
  cardPricing: {
    display: 'flex',
    width: '300px',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  }
}));

const tiers = [
    {
      title: 'Microblading',
      subheader: 'Eyebrows / Lips',
      description: ['Classic microblading | $400', 'Powder/makeup or ombre  |  $500', 'Combination microblading & shading  |  $550', '4-8 week perfecting touch up  |  $100', 'Annual touch up  |  $250'],
      buttonText: 'Book Now',
      buttonVariant: 'contained'
    },
    {
      title: 'Hair & Makeup',
      subheader: 'Events / Weddings',
      description: [
        'Bridal Makeup  |  $185',
        'Bridal Hair  |  $165',
        'Event Makeup  |  $100',
        'Event Hair  |  $65',
        'Travel Fee  |  $25+',
        '**All makeup services include a touch up kit and false lashes**',
      ],
      buttonText: 'Book Now',
      buttonVariant: 'contained',
    },
    {
      title: 'Color Services',
      description: [
        'Highlights  |  $90+     Partial  |  $80+',
        'Babylights  |  Text consultation required for price',
        'Balayage  |  $110+',
        'Lowlights  |  $85+     Partial  |  $70+',
        'Platinum  |  $115+',
        'Platinum Retouch  |  $85+',
        'Root Retouch  |  $45+',
        'All Over Color  |  $65+     Partial  |  $45+'
      ],
      buttonText: 'Book Now',
      buttonVariant: 'contained',
    },
    {
      title: 'Haircuts',
      description: [
        'Women\'s  |  $40',
        'Men\'s  |  $20',
        'Health Trim  |  $20',
        'Lowlights  |  $85+     Partial  |  $70+',
        'Lil\' Girls  |  $15 (up to 12 years young)',
        'Lil\' Boys  |  $12 (up to 12 years young)',
        'Bang Trim  |  $10'
      ],
      buttonText: 'Book Now',
      buttonVariant: 'contained',
      backgroundColor: '#000000',
    }
  ];

export default function Cards() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" component="main">
        <Grid container spacing={4} alignItems="flex-start">
          {tiers.map((tier) => (
            
            <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={3}>
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro'}
                  className={classes.cardHeader}
                />
                <CardContent >
                  <div className={classes.cardPricing}>
                  </div>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant} color="primary">
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      <Container>
        <br /><br />
        <Typography variant="body1" align="center" color="textSecondary" component="span">
        ** Text consultations required for price estimates. I cannot guarantee the estimate to be the final price. It all depends on how much time and product is needed to get you closer to your goal!**
        </Typography>
      </Container>
      </Container>
  );
}