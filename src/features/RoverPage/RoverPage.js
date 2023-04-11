import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import './RoverPage.css';
import Details from "../Details/Details";

function RoverPage({roverName}) {
  const rovers = useSelector(state => state.root.rovers)
  
  const selectedRover = rovers.find(rover => rover.name === roverName)

  return (
    <div className="rover-page">
      <h2>{roverName}</h2>
      <div>
        {selectedRover && <Details rover={selectedRover}/> }
        <p>Model</p>
      </div>
      <div>
        {/* <Form /> */}
        {/* <Images /> */}
      </div>
    </div>
  )
}

export default RoverPage;