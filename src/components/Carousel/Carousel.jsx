import React, { useEffect, useState } from 'react';
import  { SliderImages } from '../../constants/SliderImages';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';

import './Carousel.css';

function Carousel({ category, text, position }) {
    const [current, setCurrent] = useState(0);
    const length = SliderImages.length;

    const nextSlide = () => {
        setCurrent(() => (current === length - 1 ? 0 : current + 1));
    }

    const prevSlide = () => {
        setCurrent(() => (current === 0 ? length - 1 : current - 1));
    }
    

  return (
    <div className='carousel'>
            {SliderImages.map((img, index) => {
                return (
                    <div className={index === current ? "slide-active" : "slide-inactive" } key={index}>
                        {index === current && 
                        
                        <figure className='image-card' style={ position === 'left' ? {margin: '3rem 1.2rem 0 auto'} : {margin: '3rem auto 0 0'} } category={category}>
                            <img src={img} alt="grad/portrait images" />
                            <IoIosArrowDropleftCircle onClick={prevSlide} className='left-arrow' />
                            <IoIosArrowDroprightCircle onClick={nextSlide} className='right-arrow' />
                        </figure>
                        
                        }
                    </div>
                )
            })}
            <div className='carousel-text' style={ position === 'left' ? {margin: '0 1.2rem 0 auto'} : {margin: '0 auto 0 0'} }>
                <h2>{text}</h2>
            </div>
    </div>
  )
}

export default Carousel;