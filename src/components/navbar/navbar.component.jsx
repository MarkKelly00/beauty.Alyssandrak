import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    background: "#f588d9",
    width: "100%",
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
    textDecoration: "none",
    color: "black",
    fontFamily: "'Josefin Sans', sans-serif",
  },
}));

const NavBar = () => {
    const classes = useStyles();
    const pages = ['Services', 'Contact', 'Locations'];
    
          return (
            <nav>
            {pages.map(page => {
                return(
            <Link
                to={'/' + page}
                variant="button"
                color="textPrimary"
                className={classes.link}
            >
            {page}
            </Link>)
                })}
            </nav>
      )
    };

export default NavBar;
