import React, { useEffect, useState } from 'react'

const HeroSection = () => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/movies', {
        })
            .then((response) => {
                return response.json()
            })
            .then(data => {
                setImages(data);
            })
            .catch((err) => {
                console.log(err.message());
            })
    }, [])

    return (
        <div className='image-wrapper'>
            {images.map((image, index) => {
                return (
                    <div key={index} className='image-container'>
                        <img src={image.image} alt='' />
                        <p>{image.text}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default HeroSection;