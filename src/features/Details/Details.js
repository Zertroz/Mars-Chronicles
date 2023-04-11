import React from "react";

function Details({rover}) {
  console.log(rover)
  return (
    <div className="details-container">
      <p>Launch Date: {rover.launch_date}</p>
      <p>Landing Date: {rover.landing_date}</p>
      <p>Sols Passed: {rover.max_sol}</p>
      <p>Status: {rover.status}</p>
    </div>
  )
}

export default Details;