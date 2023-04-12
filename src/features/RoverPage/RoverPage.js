import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import './RoverPage.css';
import Details from "../Details/Details";
import { setImages } from "../../app/rootSlice";
import roverPhotos from "../../test_data/photos";
import Gallery from "../Gallery/Gallery";
import Form from "../Form/Form";

function RoverPage({roverName}) {
  const dispatch = useDispatch()
  const rovers = useSelector(state => state.root.rovers)
  const roverImages = useSelector(state => state.root.images)

  console.log('img', roverImages)
  const selectedRover = rovers.find(rover => rover.name === roverName)

  useEffect(() => {
    dispatch(setImages(roverPhotos.photos))
  }, [dispatch])

  return (
    <div className="rover-page">
      <div className="rover-page-top">
        {selectedRover && <Details rover={selectedRover}/> }
        <iframe src="https://mars.nasa.gov/gltf_embed/24883"  frameBorder="0"/>
      </div>
      <Form />
      <div className="rover-page-bottom">
        <Gallery />
      </div>
    </div>
  )
}

export default RoverPage;
