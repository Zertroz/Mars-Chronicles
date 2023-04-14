import React from 'react';
import {useSelector} from 'react-redux';
import './Gallery.css';
import UserMessage from '../UserMessage/UserMessage';
import Modal from '../Modal/Modal';

function Gallery () {
  const roverImages = useSelector(state => state.root.images)
  const roverTiles = roverImages.map((img) => <img src={img.img_src} alt={`Rover shot ${img.id}`} className="gallery-tile" key={img.id}/>)

  return (
    <>
    {roverImages.length ? 
      <section className="gallery-grid">
        {roverTiles}
      </section>
      :
      <UserMessage message={'Select Sol or Date...'}/>}
      <Modal />
    </>
  )
}


export default Gallery;
