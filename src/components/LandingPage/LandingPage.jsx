import React from 'react'
import './LandingPage.css'

import images from '../../constants/images';

function LandingPage() {
  return (
    <section className='landing' style={{ backgroundImage: `url(${images.hero})` }}>
      <div className='landing-text'>
        <div className="landing-text-main">
          <h1 className='landing-text-name'>Deondre Garcia</h1>
          <h1 className='landing-text-photography'>Photography</h1>
        </div>
        <p>Because time passes, but photos don't.</p>
      </div>

      
    </section>
  )
}

export default LandingPage;