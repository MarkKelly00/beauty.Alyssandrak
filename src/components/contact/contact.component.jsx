import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '25ch',
        display: 'block',
        padding: 2,
      },
    },
    button: {
        height: 60,
      },
  }));

export default function Form() {
  const classes = useStyles();

  return (
      <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Name" variant="standard" />
        <br /><br />
        <TextField id="standard-basic" label="Email" variant="standard" />
        <br /><br />
        <TextField
          id="outlined-full-width"
          label="Message"
          style={{ width: 250, height: 200 }}
          placeholder="Leave Me A Message"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
                      <Button
              variant="contained"
              color="primary"
              className={classes.button}
              endIcon={<Icon>send</Icon>}
            >
              Send
            </Button>
        </form>

  );
}
