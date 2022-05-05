import React from 'react'
import './LandingPage.css'

import images from '../../constants/images';

function LandingPage() {
  return (
    <div className='landing' style={{ backgroundImage: `url(${images.hero})` }}>
    </div>

  )
}

export default LandingPage;