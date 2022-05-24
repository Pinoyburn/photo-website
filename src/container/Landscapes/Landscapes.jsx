import React from 'react'
import Gallery from '../../components/Gallery/Gallery'

import './Landscapes.css';

function Landscapes() {
  return (
    <section className='landscapes-gallery'>
        <Gallery photoCategory='landscapes'/>
    </section>
  )
}

export default Landscapes