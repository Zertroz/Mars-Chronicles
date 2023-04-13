import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import './RoverPage.css';
import Details from "../Details/Details";
import UserMessage from '../UserMessage/UserMessage';
import { setImages } from "../../app/rootSlice";
import Gallery from "../Gallery/Gallery";
import Form from "../Form/Form";
import { fetchImages } from "../Apicalls";
import { modelUrl } from "../../roverDataLocal";

function RoverPage({roverName}) {
  const dispatch = useDispatch()
  const rovers = useSelector(state => state.root.rovers)
  const selectedRover = rovers.find(rover => rover.name === roverName)
  console.log(selectedRover)

  const fetchData = async () => {
    const roverPhotos = await fetchImages('sol', roverName, '100')
    dispatch(setImages(roverPhotos.photos))
  }

  useEffect(() => {
    fetchData()
  })

  return (
    <div className="rover-page">
      <div className="rover-page-top">
        {selectedRover ? <Details rover={selectedRover}/>
        : <UserMessage message={'Loading...'}/>}
        <iframe src={ modelUrl[roverName] } title="rover3D" frameBorder="0"/>
      </div>
      <Form />
      <div className="rover-page-bottom">
        <Gallery />
      </div>
    </div>
  )
}

export default RoverPage;
