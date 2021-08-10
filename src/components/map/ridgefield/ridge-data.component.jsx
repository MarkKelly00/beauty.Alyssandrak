import React from 'react';
import './data.styles.scss';


export default function Data() {
  const location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2788.464898329395!2d-122.56315538443587!3d45.66156667910382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495afe2fd1c3001%3A0xe4caa493c85c16f9!2sSpoiled%20Spa%20and%20Salon!5e0!3m2!1sen!2sus!4v1628574322129!5m2!1sen!2sus";

  return (
    <React.Fragment>
      <div>
      <iframe
  width="500"
  height="350"
  title="home-location"
  frameborder="0" style={{border:0, margin: 5}}
  src={location} allowfullscreen />
  </div>
    </React.Fragment>
  );
}