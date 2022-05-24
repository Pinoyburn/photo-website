import React from 'react';
import Gallery from '../../components/Gallery/Gallery';

import './Portraits.css';

function Portraits() {
  return (
    <section className='portraits-gallery'>
        <Gallery photoCategory='portraits'/>
    </section>
  )
}

export default Portraits