import React, { useState } from 'react';
import  { SliderImages } from '../../constants/SliderImages';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';

import './Carousel.css';

function Carousel() {
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
        <IoIosArrowDropleftCircle onClick={prevSlide} className='left-arrow'/>
        <IoIosArrowDroprightCircle onClick={nextSlide} className='right-arrow' />
        {SliderImages.map((img, index) => {
            return (
                <div className={index === current ? "slide-active" : "slide-inactive" } key={index}>
                    {index === current && <img src={img} alt="grad/portrait images" />}
                </div>
            )
        })}
    </div>
  )
}

export default Carousel;