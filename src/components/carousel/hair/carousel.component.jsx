import React from "react";
import Carousel from "react-material-ui-carousel";
import autoBind from "auto-bind";
import Logo from "../../../assets/navLogo.png";

import "./carousel.styles.scss";

import {
  Card,
  CardContent,
  CardMedia,
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
        <img src={Logo} className="imgLogo"/>
        <Button variant="outlined" className="ViewButton" href="https://square.site/book/DBZVBRD8VF6MK/beauty-alyssandrak-ridgefield-wa" target="_blank" style={{marginTop: '85px'}}>
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
        Image: "https://i.ibb.co/7b7SdWm/hair16.jpg",
      },
      {
        Name: "Bride - Hair & Makeup",
        Image: "https://i.ibb.co/WVGsKJF/hair10.jpg",
      },
    ],
  },
  {
    contentPosition: "middle",
    Items: [
      {
        Name: "Bride - Hair Updo",
        Image: "https://i.ibb.co/zngfHKd/hair9.jpg",
      },
      {
        Name: "Bride - Hair & Makeup",
        Image: "https://i.ibb.co/3TfvJ3B/hair1.jpg",
      },
    ],
  },
  {
    contentPosition: "right",
    Items: [
      {
        Name: "Bride - Hair & Makeup",
        Image: "https://i.ibb.co/g4x2L96/hair8.jpg",
      },
      {
        Name: "Bride - Hair",
        Image: "https://i.ibb.co/j6kW5vL/hair7.jpg",
      },
    ],
  },
  {
    contentPosition: "middle",
    Items: [
      {
        Name: "Bride - Hair & Makeup",
        Image: "https://i.ibb.co/6t09y5B/hair12.jpg",
      },
      {
        Name: "Bride - Hair",
        Image: "https://i.ibb.co/k2KDCdD/hair14.jpg",
      },
    ],
  },
  {
    contentPosition: "left",
    Items: [
      {
        Name: "Bride - Hair & Makeup",
        Image: "https://i.ibb.co/1ZHx3B6/hair5.jpg",
      },
      {
        Name: "Bride - Hair",
        Image: "https://i.ibb.co/yYFKwxF/hair4.jpg",
      },
    ],
  },
  {
    contentPosition: "middle",
    Items: [
      {
        Name: "Bride - Hair & Makeup",
        Image: "https://i.ibb.co/3dz1m6w/hair2.jpg",
      },
      {
        Name: "Bride - Hair",
        Image: "https://i.ibb.co/T1rSM9b/hair3.jpg",
      },
    ],
  },
  {
    contentPosition: "right",
    Items: [
      {
        Name: "Bride - Hair & Makeup",
        Image: "https://i.ibb.co/7zSX3J4/hair6.jpg",
      },
      {
        Name: "Bride - Hair",
        Image: "https://i.ibb.co/kSbpGHG/hair11.jpg",
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
        <Button disabled>Hair Gallery</Button>
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
