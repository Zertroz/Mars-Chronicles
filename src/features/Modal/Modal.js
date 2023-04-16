import React from 'react';
import './Modal.css';

const Modal = ({modalSrc, setModalSrc}) => {
  
  return (
    <div className='modal'>
      <img className='modal-img' src={modalSrc} alt='Selected modal'/>
      <button className='x-button' onClick={() => setModalSrc('')}>X</button>
    </div>
  )
}

export default Modal;
