import React from 'react';
import Carousel from '../Carousel/Carousel';

import './SneakPeek.css';

function SneakPeek() {
  return (
    <section className='sneak-peek'>
        <Carousel category='Graduation' />
        <Carousel category='Portraits' />
    </section>
  )
}

export default SneakPeek