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
      <div className="carousel-top">
        <div className='carousel-fade' >
          <Carousel link='/graduation' text='You only graduate once!' position='left' category='Graduation' />
        </div>
        <div className='carousel-text'>
          <h2>Graduation</h2>
          <p>
            Celebrate the years of hard work and sacrifices you made to get here.
          </p>
        </div>
      </div>

      {/* Carousel right container */}
      <div className="carousel-bottom">
        <div className="carousel-text">
          <h2>Portraits</h2>
          <p>Looking to spruce up your LinkedIn page, or show off your new hair on Instagram?</p>
        </div>
        <div className='carousel-fade'>
          <Carousel link='/portraits' text='Test: Take your portrait pics!' category='Portraits' />
        </div>
      </div>

    </section>
  )
}

export default SneakPeek