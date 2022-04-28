import React from 'react';
import Carousel from '../Carousel/Carousel';

import './SneakPeek.css';

function SneakPeek() {
  return (
    <section className='sneak-peek'>
        <Carousel text='Test: Take your grad pics!' category='Graduation' />
        <Carousel text='Test: Take your portrait pics!' category='Portraits' />
    </section>
  )
}

export default SneakPeek