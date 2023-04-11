import React from "react";
import './Details.css';

function Details({rover}) {
  console.log(rover)
  return (
    <div className="details-container">
      <h2>{rover.name}</h2>
      <p>Launch Date: {rover.launch_date}</p>
      <p>Landing Date: {rover.landing_date}</p>
      <p>Sols Passed: {rover.max_sol}</p>
      <p>Status: {rover.status}</p>
    </div>
  )
}

export default Details;
