import React, { useState } from "react";
import { Axios, db } from 'axios';
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginLeft: "auto",
      marginRight: "auto",
      width: "30ch",
      display: "block",
      padding: 2,
    },
  },
  button: {
    height: 60,
    width: "15ch",
    fontSize: 14,
    backgroundColor: "#f576d9",
    display: "flex"
  },
}));

export default function Form() {
  const classes = useStyles();
  const [formData, setFormData] = useState({})

  const updateInput = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = event => {
    event.preventDefault()
    sendEmail()
    setFormData({
      name: '',
      email: '',
      message: '',
    })
  }
  const sendEmail = () => {
    Axios.post(
      'https://us-central1-your-app-name.cloudfunctions.net/submit',
      formData
    )
      .then(res => {
        db.collection('emails').add({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date(),
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        inputProps={{ style: { width: 250 } }}
        id="standard-basic"
        label="Name"
        variant="standard"
        onChange={updateInput}
        value={formData.name || ''}
      />
      <br />
      <TextField
        inputProps={{ style: { width: 250 } }}
        id="standard-basic"
        label="Email"
        variant="standard"
        onChange={updateInput}
        value={formData.email || ''}
      />
      <br />
      <TextField
      multiline
        inputProps={{ style: { width: 250, height: 200 } }}
        id="outlined-full-width"
        label="Message"
        style={{ width: "33ch" }}
        placeholder="Please Leave A Message..."
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        onChange={updateInput}
        value={formData.message || ''}
      />
      <br />
      <Button
        type="submit"
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
