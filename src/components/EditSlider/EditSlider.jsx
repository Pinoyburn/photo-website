import React, { useState } from 'react';

import useIntersectionObserver from '../../customHooks/useIntersectionObserver';

import { RiArrowLeftSFill, RiArrowRightSFill } from 'react-icons/ri';

import { EditSliderImages } from '../../constants/EditSliderImages';

import './EditSlider.css';
import { calculateNewValue } from '@testing-library/user-event/dist/utils';


  // options for custom hook
  const editSliderOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px 0px 0px'
  };

function EditSlider() {
  const [offsetX, setOffsetX] = useState((400 * 1.2) / 2);
  const [dragging, setDragging] = useState(false);
  const [edge, setEdge] = useState(0);
  useIntersectionObserver('.edit-slider-container', 'edit-slider-appear', editSliderOptions);


  const handleMouseDown = (e) => {
      if (dragging) {
          setOffsetX(e.screenX - e.currentTarget.getBoundingClientRect().left);
      }
  }
 // edit slider functionality for mobile "tap" devices
  const handleTouchDown = (e) => {
    if (dragging) {
      setOffsetX(e.touches[0].clientX- e.currentTarget.getBoundingClientRect().left);
    }
  };

  return (
    <section className='edit-slider-section-container'>
      <div className='edit-slider-header'>
        <h3>How much of a difference does editing make?</h3>
      </div>

      <div className="edit-slider-content-wrapper">
        <div className='edit-slider-container' style={{ width: `${edge}px` }} onMouseDown={() => setDragging(true)} onMouseUp={() => setDragging(false)} onMouseLeave={() => setDragging(false)} onMouseMove={handleMouseDown} onTouchStart={() => setDragging(true)} onTouchEnd={() => setDragging(false)} onTouchMove={handleTouchDown}>
            <div className='bottom-image'>
                <img draggable='false' src={EditSliderImages[0]} />
            </div>

            {/* slider bar */}
            <figure className='edit-slider-divider' style={ offsetX < edge ? { transform: `translate(${offsetX}px, 0)` } : { transform: `translate(${edge}px, 0)` }} >
              <div className='edit-slider-divider-circle'>
                <RiArrowLeftSFill className='arrow'/>
                <RiArrowRightSFill className='arrow'/>
              </div>
            </figure>
            
            <div className='top-image' style={{ clipPath: `polygon(${offsetX + 4}px 0, 100% 0, 100% 100%, ${offsetX + 4}px 100%)` }} >
                <img onLoad={() => setEdge(document.querySelector('.top-image').clientWidth)}  src={EditSliderImages[1]} />
            </div>
        </div>
        <div className='edit-slider-text'>
          <h1>A lot.</h1>
          <p>
            Editing is where photography meets creative expression. Through editing you can instill atmosphere, evoke emotions, and transcend the average filtered photograph.
          </p>
          <br />
          <p>
            You can take a photo only once, but edit it a million ways. 
           </p>
           <br />
           <p> 
            Ensure the photographer you choose has such a mastery of Lightroom and Photoshop to convert vision to reality.
          </p>
        </div>
      </div>

    </section>
  )
}

export default EditSlider;