import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import './RoverPage.css';
import Details from "../Details/Details";
import { setImages } from "../../app/rootSlice";
import Gallery from "../Gallery/Gallery";
import Form from "../Form/Form";
import { fetchImages } from "../Apicalls";

function RoverPage({roverName}) {
  const dispatch = useDispatch()
  const rovers = useSelector(state => state.root.rovers)

  const selectedRover = rovers.find(rover => rover.name === roverName)

  const fetchData = async () => {
    const roverPhotos = await fetchImages()
    dispatch(setImages(roverPhotos.photos))
  }

  useEffect(() => {
    console.log('useEffect in roverPage')
    fetchData()
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
