import React from "react";
import Carousel from "react-material-ui-carousel";
import autoBind from "auto-bind";
import Logo from "../../assets/navLogo.png";

import "./carousel.styles.scss";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
} from "@material-ui/core";

function Banner(props) {
  if (props.newProp) console.log(props.newProp);
  const contentPosition = props.contentPosition
    ? props.contentPosition
    : "left";
  const totalItems = props.length ? props.length : 3;
  const mediaLength = totalItems - 1;

  let items = [];
  const content = (
    <Grid item xs={12 / totalItems} key="content" style={{backgroundColor: "#f588d9"}}>
      <CardContent className="Content" >
        <img src={Logo} />
        <Button variant="outlined" className="ViewButton" href="https://square.site/book/DBZVBRD8VF6MK/beauty-alyssandrak-ridgefield-wa" target="_blank">
          Book Now
        </Button>
      </CardContent>
    </Grid>
  );

  for (let i = 0; i < mediaLength; i++) {
    const item = props.item.Items[i];

    const media = (
      <Grid item xs={12 / totalItems} key={item.Name}>
        <CardMedia className="Media" image={item.Image} title={item.Name} >
          <Typography component="a" className="MediaCaption" href="https://square.site/book/DBZVBRD8VF6MK/beauty-alyssandrak-ridgefield-wa" target="_blank">{item.Name}</Typography>
        </CardMedia>
      </Grid>
    );

    items.push(media);
  }

  if (contentPosition === "left") {
    items.unshift(content);
  } else if (contentPosition === "right") {
    items.push(content);
  } else if (contentPosition === "middle") {
    items.splice(items.length / 2, 0, content);
  }

  return (
    <Card raised className="Banner">
      <Grid container spacing={0} className="BannerGrid">
        {items}
      </Grid>
    </Card>
  );
}

const items = [
  {
    contentPosition: "left",
    Items: [
      {
        Name: "Bride - Hair & Makeup",
        Image: "https://i.ibb.co/P4DWt0R/event1.jpg",
      },
      {
        Name: "Bride - Hair & Makeup",
        Image: "https://i.ibb.co/wwr37jb/event4.jpg",
      },
    ],
  },
  {
    contentPosition: "middle",
    Items: [
      {
        Name: "Bride - Hair Updo",
        Image: "https://i.ibb.co/SrVGMbd/event2.jpg",
      },
      {
        Name: "Bride - Hair & Makeup",
        Image: "https://i.ibb.co/1sc8WQN/event3.jpg",
      },
    ],
  },
  {
    contentPosition: "right",
    Items: [
      {
        Name: "Bride - Hair & Makeup",
        Image: "https://i.ibb.co/H7t0hPc/event5.jpg",
      },
      {
        Name: "Bride - Hair",
        Image: "https://i.ibb.co/qnBKxK1/event6.jpg",
      },
    ],
  },
];

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  render() {
    return (
      <div>
        <Button disabled>Events Gallery</Button>
        {/* <Button href="https://square.site/book/DBZVBRD8VF6MK/beauty-alyssandrak-ridgefield-wa">
          Click To Book
        </Button> */}
        <Carousel
          className="EventPics"
          navButtonsProps={{
            style: {
              backgroundColor: "#fca7ea",
            },
          }}
        >
          {items.map((item, index) => {
            return (
              <Banner
                item={item}
                key={index}
                contentPosition={item.contentPosition}
              />
            );
          })}
        </Carousel>
      </div>
    );
  }
}

export default Gallery;
