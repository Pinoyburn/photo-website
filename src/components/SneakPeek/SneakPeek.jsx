import React, { useEffect } from 'react';
import Carousel from '../Carousel/Carousel';

import './SneakPeek.css';

const carouselOptions = {
  root: null,
  threshold: 0.3,
  rootMargin: "0px 0px -80px 0px"
};
const carouselObserver = new IntersectionObserver(function(entries, carouselObserver) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("carousel-appear");
      carouselObserver.unobserve(entry.target);
    }
  })
}, carouselOptions);

function SneakPeek() {
  
useEffect(() => {
  const carouselFaders = document.querySelectorAll(".carousel-fade");
  carouselFaders.forEach(fader => {
    carouselObserver.observe(fader);
  })

  return () => {
    carouselObserver.disconnect();
  }
},[]);

  return (
    <section className='sneak-peek'>
      {/* Carousel left container */}
      <div className="carousel-left">
        <div className='carousel-fade' >
          <Carousel text='You only graduate once!' position='left' category='Graduation' />
        </div>
        <div className='carousel-text'>
          <h2>Graduation</h2>
        </div>
      </div>

      {/* Carousel right container */}
      <div className="carousel-right">
        <div className="carousel-text">
          <h2>Portraits</h2>
        </div>
        <div className='carousel-fade'>
          <Carousel text='Test: Take your portrait pics!' category='Portraits' />
        </div>
      </div>

    </section>
  )
}

export default SneakPeek