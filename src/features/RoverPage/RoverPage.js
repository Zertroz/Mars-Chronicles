import React from "react";
import { useSelector } from "react-redux";
import './RoverPage.css';
import Details from "../Details/Details";

function RoverPage({roverName}) {
  const rovers = useSelector(state => state.root.rovers)
  
  const selectedRover = rovers.find(rover => rover.name === roverName)

  return (
    <div className="rover-page">
      <div className="rover-page-left">
        {selectedRover && <Details rover={selectedRover}/> }
        <iframe src="https://mars.nasa.gov/gltf_embed/24883" width="100%" height="450px" frameborder="0" />
      </div>
      <div className="rover-page-right">
        {/* <Form /> */}
        {/* <Images /> */}
      </div>
    </div>
  )
}

export default RoverPage;
