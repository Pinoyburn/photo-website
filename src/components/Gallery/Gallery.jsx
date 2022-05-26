import React, { useState, useEffect, useRef } from 'react';
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

        const imageSelect = document.querySelectorAll(".image-container");
        console.log(imageSelect);
        imageSelect.forEach((entry) => {
            entry.classList.add('slide-up');
        })

        return () => {

        }
    },[category])

    

  return (
    <div className='gallery-container'>
        {category.map((img, index) => {
            const numberTest = Math.floor((Math.random() * 2) + 1);
            return (
                <div className='image-container' style={{ transition: `transform ${numberTest}s ease` }}key={index}>
                    <img src={img} alt='gallery-image' />
                </div>
            )
        })}
    </div>
  )
}

export default Gallery