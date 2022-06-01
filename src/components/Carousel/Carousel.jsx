import React, { useEffect, useState } from 'react';
import  { SliderImages } from '../../constants/SliderImages';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';

import { Link } from 'react-router-dom';

import './Carousel.css';

function Carousel({ category, position, link }) {
    const [current, setCurrent] = useState(0);
    const length = SliderImages.length;

    const nextSlide = () => {
        setCurrent(() => (current === length - 1 ? 0 : current + 1));
    }

    const prevSlide = () => {
        setCurrent(() => (current === 0 ? length - 1 : current - 1));
    }


    console.log(link);
    

  return (
    <div className='carousel' >
            <div className="carousel-background">
                {SliderImages.map((img, index) => {
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