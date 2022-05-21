import React, { useState, useEffect } from 'react';
import { gradImages } from '../../constants/gradImages.js';

import './Gallery.css';

function Gallery({ photoCategory }) {
    const[category, setCategory] = useState([]);

    useEffect(() => {
        if (photoCategory === 'graduation') {
            setCategory(gradImages);
        }

        return () => {

        }
    },[])

  return (
    <div className='gallery-container'>
        {category.map((img, index) => {
            return (
                <div className='image-container' key={index}>
                    <img src={img} alt='gallery-image' />
                </div>
            )
        })}
    </div>
  )
}

export default Gallery