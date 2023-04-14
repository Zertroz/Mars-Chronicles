import React from 'react';
import './Modal.css';

const Modal = ({modalSrc}) => {
  
  return (
    <div className='modal'>
      <img className='modal-img' src={modalSrc}/>
    </div>
  )
}

export default Modal;
