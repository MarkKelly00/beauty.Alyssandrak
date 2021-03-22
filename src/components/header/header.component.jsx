import React from "react";
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Logo from "../../assets/navLogo.png";
import DraftsIcon from "@material-ui/icons/Drafts";

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

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={1}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: "#f588d9",
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            <Link to="/" className={classes.link}>
              <img src={Logo} />
            </Link>
          </Typography>
          <nav>
            <Link
              to="/services"
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}
            >
              Services
            </Link>
            <Link
              to="/contact"
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}
            >
              Contact
            </Link>
            <Link
              to="/location"
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}
            >
              My Locations
            </Link>
          </nav>
          <Button
            href="#"
            color="default"
            variant="outlined"
            className={classes.link}
            onClick={handleClick}
          >
            BOOK NOW
          </Button>
          <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <StyledMenuItem component="a" href='https://square.site/book/DBZVBRD8VF6MK/beauty-alyssandrak-ridgefield-wa' target='_blank'>
              <ListItemIcon>
                <DraftsIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Hair/Events" />
            </StyledMenuItem>
            <StyledMenuItem component="a" href='https://square.site/book/LR4716B541B83/lovely-a-self-center-vancouver-wa' target='_blank'>
              <ListItemIcon>
                <DraftsIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Brows/Lips" />
            </StyledMenuItem>
          </StyledMenu>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
