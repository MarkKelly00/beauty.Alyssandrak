import React from 'react';
import './data.styles.scss';


export default function Data() {
  const apiKey = "AIzaSyBTHG7Q8WoPwWgU3X7vJfY9EM1vSLru-m8";
  const lat = '45.7447427';
  const long = '-122.6379171';
  const location = "https://www.google.com/maps/embed/v1/search?key=" + apiKey + "&q=" + lat + "," + long + "&zoom=17&maptype=satellite";

  return (
    <React.Fragment>
      <div>
      <iframe
  width="550"
  height="350"
  frameborder="0" style={{border:0, margin: 5}}
  src={location} allowfullscreen />
  </div>
    </React.Fragment>
  );
}