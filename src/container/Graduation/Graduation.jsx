import React from 'react';
import Gallery from '../../components/Gallery/Gallery.jsx';

import './Graduation.css';

function Graduation() {
  return (
    <section className='grad-gallery'>
      <Gallery photoCategory='graduation' />
    </section>
  )
}

export default Graduation