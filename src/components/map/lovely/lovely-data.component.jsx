import React from 'react';


export default function Data() {
  const apiKey = "AIzaSyBTHG7Q8WoPwWgU3X7vJfY9EM1vSLru-m8";
  const lat = '45.6281624';
  const long = '-122.6715607';
  const location = "https://www.google.com/maps/embed/v1/search?key=" + apiKey + "&q=" + lat + "," + long + "&zoom=17&maptype=satellite";

  return (
    <React.Fragment>
      <div>
      <iframe
  width="500"
  height="350"
  frameborder="0" style={{border:0, margin: 5}}
  src={location} allowfullscreen />
  </div>
    </React.Fragment>
  );
}