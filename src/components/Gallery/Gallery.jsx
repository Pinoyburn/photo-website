import React, { useState, useEffect } from 'react';
import { gradImages } from '../../constants/gradImages.js';
import { landscapeImages } from '../../constants/landscapeImages.js';
import { portraitImages } from '../../constants/portraitImages.js';

import './Gallery.css';


function Gallery({ photoCategory }) {
    const[category, setCategory] = useState([]);

    useEffect(() => {
        if (photoCategory === 'graduation') {
            setCategory(gradImages);
        } else if (photoCategory === 'landscapes') {
            setCategory(landscapeImages);
        } else if (photoCategory === 'portraits') {
            setCategory(portraitImages);
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