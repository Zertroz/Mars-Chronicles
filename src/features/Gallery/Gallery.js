import React from 'react';
import {useSelector} from 'react-redux';
import './Gallery.css';

function Gallery () {
  const roverImages = useSelector(state => state.root.images)
  const roverTiles = roverImages.map((img) => <img src={img.img_src} className="gallery-tile" key={img.id}/>)

  return (
    <section className="gallery-grid">
      {roverTiles}
    </section>
  )
}


export default Gallery;