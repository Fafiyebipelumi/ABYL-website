import React, { useState, useEffect } from 'react';
import './Slider.css';
import { sliderData } from './slider-data';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const Slider = () => {

    const sliderLength = sliderData.length;

    const nextSlide = () => {
        setCurrentSlide(currentSlide === sliderLength - 1 ? 0 : currentSlide + 1);
    }

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? sliderLength - 1 : currentSlide - 1);
    }

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        setCurrentSlide(0)
    }, [])

    return (
        <div className='slider'>
            <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
            <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />

            {sliderData.map((slide, index) => {
                return (
                    <div className={index === currentSlide ? 'slide current' : 'slide'} key={index}>
                        {index === currentSlide && (
                            <>
                                <img src={slide.image} alt='image' />
                                <div className='content'>
                                    <h2>{slide.heading}</h2>
                                    <p>{slide.desc}</p>
                                    <hr />
                                    <button className='--btn --btn-primary'>Get Started</button>
                                </div>
                            </>
                        )}
                    </div>
                )
            })}

        </div>
    );
}

export default Slider;