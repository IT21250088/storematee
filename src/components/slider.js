import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const Slider = ({ images }) => {
  return (
    <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} showThumbs={false}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
