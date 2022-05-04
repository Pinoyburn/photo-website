import React, { useState } from 'react'

import { SliderImages } from '../../constants/SliderImages';

import './EditSlider.css';

function EditSlider() {
  const [offsetX, setOffsetX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [edge, setEdge] = useState(0);

  const handleMouseDown = (e) => {
      if (dragging) {
          setOffsetX(e.screenX - e.currentTarget.getBoundingClientRect().left);
      }
  }

  return (
    <section className='edit-slider-section-container'>
      <div className='edit-slider-container' style={{ width: `${edge}px` }} onMouseDown={() => setDragging(true)} onMouseUp={() => setDragging(false)} onMouseLeave={() => setDragging(false)} onMouseMove={handleMouseDown}>
          <div className='bottom-image'>
              <img src={SliderImages[0]} />
          </div>
          <div className='edit-slider-divider' style={ offsetX < edge - 15 ? { transform: `translate(${offsetX}px, 0)` } : { transform: `translate(${edge - 15}px, 0)` }} />
          <div className='top-image' style={{ clipPath: `polygon(${offsetX + 2}px 0, 100% 0, 100% 100%, ${offsetX + 2}px 100%)` }} >
              <img onLoad={() => setEdge(document.querySelector('.top-image').clientWidth)}  src={SliderImages[1]} />
          </div>
      </div>
      <div className='edit-slider-text'>

      </div>
    </section>
  )
}

export default EditSlider