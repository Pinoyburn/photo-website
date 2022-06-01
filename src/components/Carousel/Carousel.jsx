import React, { useEffect, useState } from 'react';
import  { portraitSliderImages } from '../../constants/portraitSliderImages';
import  { graduationSliderImages } from '../../constants/graduationSliderImages';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';

import { Link } from 'react-router-dom';

import './Carousel.css';

function Carousel({ category, position, link, photoCategory }) {
    const [current, setCurrent] = useState(0);
    const [photoType, setPhotoType] = useState([]);
    const length = photoType.length;

    const nextSlide = () => {
        setCurrent(() => (current === length - 1 ? 0 : current + 1));
    }

    const prevSlide = () => {
        setCurrent(() => (current === 0 ? length - 1 : current - 1));
    }
    
    useEffect(() => {
        if (photoCategory === 'graduation') {
            setPhotoType(graduationSliderImages);
        } else if (photoCategory === 'portraits') {
            setPhotoType(portraitSliderImages);
        }
    })

  return (
    <div className='carousel' >
            <div className="carousel-background">
                {photoType.map((img, index) => {
                    return (
                        <div className={index === current ? "slide-active" : "slide-inactive" } key={index}>
                            {index === current &&
                
                            <figure className='image-card' style={ position === 'left' ? { transform: 'translate(-5%, -5%)' } : { transform: 'translate(5%, -5%)' } } category={category}>
                                <Link to={link}>
                                    <img src={img} alt="grad/portrait images" />
                                </Link>
                                <IoIosArrowDropleftCircle onClick={prevSlide} className='left-arrow' />
                                <IoIosArrowDroprightCircle onClick={nextSlide} className='right-arrow' />
                            </figure>
                            }
                        </div>
                    )
                })}
            </div>
    </div>
  )
}

export default Carousel;