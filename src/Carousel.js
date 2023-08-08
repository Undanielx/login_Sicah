import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Importa las imágenes
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';

const CarouselComponent = () => {
  const images = [
    image2,
    image3,
    // Agrega más imágenes importadas aquí si lo deseas.
  ];

  return (
    <Carousel showThumbs={false}>
      {images.map((imageUrl, index) => (
        <div key={index}>   
          <img src={imageUrl} alt={`Imagen ${index}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
