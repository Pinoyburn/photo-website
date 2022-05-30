import React from 'react';
import LandingPage from "../../components/LandingPage/LandingPage";
import SneakPeek from "../../components/SneakPeek/SneakPeek";
import EditSlider from "../../components/EditSlider/EditSlider";
import useIntersectionObserver from '../../customHooks/useIntersectionObserver';

import './Home.css';

const dividerTextOptions = {
  threshold: 1,
  rootMargin: '0px 0px 0px 0px'
}

function Home() {
  useIntersectionObserver('.divider-text', 'divider-text-reveal', dividerTextOptions);
 

  return (
    <section>
        <LandingPage />
        <div className="divider">
          <h3 className='divider-text'>Hello World!</h3>
        </div>
        {/* MAKE THE ABOVE HAVE A TYPEWRITER EFFECT */}
        <SneakPeek />
        <EditSlider />
    </section>
  )
}

export default Home