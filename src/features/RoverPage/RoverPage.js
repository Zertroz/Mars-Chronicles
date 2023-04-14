import React from "react";
import { useSelector } from "react-redux";
import './RoverPage.css';
import Details from "../Details/Details";
import UserMessage from '../UserMessage/UserMessage';
import Gallery from "../Gallery/Gallery";
import Form from "../Form/Form";
import { modelUrl } from "../../roverDataLocal";

function RoverPage({roverName}) {
  const rovers = useSelector(state => state.root.rovers)
  const selectedRover = rovers.find(rover => rover.name === roverName)


  return (
    <div className="rover-page">
      <div className="rover-page-top">
        {selectedRover ? <Details rover={selectedRover}/>
        : <UserMessage message={'Loading...'}/>}
        <iframe src={ modelUrl[roverName] } title="rover3D" frameBorder="0"/>
      </div>
      <Form rover={selectedRover} />
      <div className="rover-page-bottom">
        <Gallery />
      </div>
    </div>
  )
}

export default RoverPage;
