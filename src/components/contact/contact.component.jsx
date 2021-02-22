import React, { useState } from "react";
import { Axios, db } from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";

import "./contact.styles.scss";

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
    fontSize: 15,
    backgroundColor: "#f576d9",
    display: "flex",
  },
}));

const Form = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({});

  const updateInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    sendEmail();
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  const sendEmail = () => {
    Axios.post(
      "https://us-central1-beautyalyssandra.cloudfunctions.net/submit",
      formData
    )
      .then((res) => {
        db.collection("emails").add({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date(),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
    <input
      type="text"
      name="name"
      placeholder="Name"
      onChange={updateInput}
      value={formData.name || ''}
    />
    <input
      type="email"
      name="email"
      placeholder="Email"
      onChange={updateInput}
      value={formData.email || ''}
    />
    <textarea
      type="text"
      name="message"
      placeholder="Message"
      onChange={updateInput}
      value={formData.message || ''}
    ></textarea>
    <button type="submit" className={classes.button}>Submit&nbsp;<Icon>send</Icon></button>
  </form>
  );
};

export default Form;
