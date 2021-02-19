import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
  card: {
    display: 'flex',
    maxWidth: 650,
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 200,
  },
  linkStyle: {
    textDecoration: 'none',
    color: 'inherit',
  }
});

export default function FeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Grid item xs={12} md={6}>
        <Card className={classes.card} >
          <div className={classes.cardDetails}>
            <CardContent >
            <Link className={classes.linkStyle} variant="subtitle1" href="/contact">
              <Typography component="h2" variant="h5">
                {post.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {post.sub}
              </Typography>
              <br />
              <Typography variant="subtitle1" paragraph>
                {post.description}
              </Typography>
            </Link>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia className={classes.cardMedia} image={post.image} title={post.imageTitle} />
          </Hidden>
        </Card>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
};