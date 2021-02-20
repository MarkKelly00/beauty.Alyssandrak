import React from 'react';
import './data.styles.scss';


export default function Data() {
  const apiKey = "AIzaSyBTHG7Q8WoPwWgU3X7vJfY9EM1vSLru-m8";
  const lat = '45.7445900';
  const long = '-122.6376871';
  const location = "https://www.google.com/maps/embed/v1/search?key=" + apiKey + "&q=" + lat + "," + long + "&zoom=17&maptype=satellite";

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