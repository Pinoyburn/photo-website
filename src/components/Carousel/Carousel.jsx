import React, { useState } from 'react';
import  { SliderImages } from '../../constants/SliderImages';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';

import './Carousel.css';

function Carousel({ category }) {
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
                        
                        <figure className='image-card' category={category}>
                            <img src={img} alt="grad/portrait images" />
                            <IoIosArrowDropleftCircle onClick={prevSlide} className='left-arrow' />
                            <IoIosArrowDroprightCircle onClick={nextSlide} className='right-arrow' />
                        </figure>
                        
                        }
                    </div>
                )
            })}
    </div>
  )
}

export default Carousel;