import React from 'react';
import Carousel from "react-material-ui-carousel"
import autoBind from "auto-bind"
import hair1 from '../../assets/carousel/Color/hair1.jpeg';

import './carousel.styles.scss';

import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Grid,
    Button
} from '@material-ui/core';

function Banner(props) {
    if (props.newProp) console.log(props.newProp)
    const contentPosition = props.contentPosition ? props.contentPosition : "left"
    const totalItems = props.length ? props.length : 3;
    const mediaLength = totalItems - 1;

    let items = [];
    const content = (
        <Grid item xs={12 / totalItems} key="content" >
            <CardContent className="Content">
                <Typography className="Title">
                    {props.item.Name}
                </Typography>

                <Typography className="Caption">
                    {props.item.Caption}
                </Typography>

                <Button variant="outlined" className="ViewButton">
                    Book Now
                </Button>
            </CardContent>
        </Grid>
    )


    for (let i = 0; i < mediaLength; i++) {
        const item = props.item.Items[i];

        const media = (
            <Grid item xs={12 / totalItems} key={item.Name}>
                <CardMedia
                    className="Media"
                    image={item.Image}
                    title={item.Name}
                >
                    <Typography className="MediaCaption">
                        {item.Name}
                    </Typography>
                </CardMedia>

            </Grid>
        )

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
    )
}

const items = [
    {
        Items: [
            {
                Name: "Macbook Pro",
                Image: '../../assets/carousel/Color/hair1.jpeg'
            },
            {
                Name: "iPhone",
                Image: "https://source.unsplash.com/featured/?iphone"
            }
        ]
    },
    {
        Items: [
            {
                Name: "Washing Machine WX9102",
                Image: "https://source.unsplash.com/featured/?washingmachine"
            },
            {
                Name: "Learus Vacuum Cleaner",
                Image: "https://source.unsplash.com/featured/?vacuum,cleaner"
            }
        ]
    },
    {
        Items: [
            {
                Name: "Living Room Lamp",
                Image: "https://source.unsplash.com/featured/?lamp"
            },
            {
                Name: "Floral Vase",
                Image: "https://source.unsplash.com/featured/?vase"
            }
        ]
    }
]

class Gallery extends React.Component {
    constructor(props) {
        super(props);



        autoBind(this);
    }

    

    render() {
        return (
            <div style={{ color: "#494949" }}>
                <h2>Gallery</h2>

                <Carousel
                    className="Example"
                    next={(now, previous) => console.log(`Next User Callback: Now displaying child${now}. Previously displayed child${previous}`)}
                    prev={(now, previous) => console.log(`Prev User Callback: Now displaying child${now}. Previously displayed child${previous}`)}
                    onChange={(now, previous) => console.log(`OnChange User Callback: Now displaying child${now}. Previously displayed child${previous}`)}
                >
                    {
                        items.map((item, index) => {
                            return <Banner item={item} key={index} contentPosition={item.contentPosition} />
                        })
                    }
                </Carousel>

            </div>

        )
    }
}

export default Gallery;