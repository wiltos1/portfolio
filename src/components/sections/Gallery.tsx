import React, { useState } from 'react';
import { X } from 'lucide-react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import boardImg from '../../assets/board.jpg';
import tableImg from '../../assets/table.jpg';
import tensegrityImg from '../../assets/tensengrity.jpg';
import hologramImg from '../../assets/hologram.jpg';
import rigImg from '../../assets/rig.jpg';
import circuitImg from '../../assets/circuit.jpg';
import chessImg from '../../assets/chess.jpg';
import feaImg from '../../assets/fea.jpg';
import mecImg from '../../assets/mec.jpg';
import bikeImg from '../../assets/bike.jpg';

const galleryData = [
  { imageUrl: boardImg, caption: '3D visual effect cutting board' },
  { imageUrl: tableImg, caption: 'Custom coffee table from scrap wood' },
  { imageUrl: tensegrityImg, caption: 'Tensegrity bedside table' },
  { imageUrl: hologramImg, caption: 'Image to rotating hologram on STM32' },
  { imageUrl: rigImg, caption: 'Bearing RUL test rig' },
  { imageUrl: circuitImg, caption: 'LED control circuit using IC components' },
  { imageUrl: chessImg, caption: 'Chess training app' },
  { imageUrl: feaImg, caption: 'Finite element simulation in SolidWorks' },
  { imageUrl: mecImg, caption: 'Winners of McMaster Engineering Competition!' },
  { imageUrl: bikeImg, caption: 'Layout for ESP32 based bicycle dynamics data collection' }
];

const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} z-10`}
      style={{
        ...style,
        display: 'flex',
        right: '-35px',
        width: '48px',
        height: '48px',
        background: '#1e40af', // Tailwind's blue-800
        color: '#fff',
        borderRadius: '9999px',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '24px'
      }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} z-10`}
      style={{
        ...style,
        display: 'flex',
        left: '-35px',
        width: '48px',
        height: '48px',
        background: '#1e40af',
        color: '#fff',
        borderRadius: '9999px',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '24px'
      }}
      onClick={onClick}
    />
  );
};

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    className: 'rounded-xl'
  };


  return (
    <section id="gallery" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Photo Gallery
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Visual highlights from my engineering journey and projects.
          </p>
        </div>

        <Slider {...sliderSettings}>
          {galleryData.map((item, index) => (
            <div key={index} className="px-2">
              <div
                className="relative group overflow-hidden rounded-xl cursor-pointer"
                onClick={() => openModal(item.imageUrl)}
              >
                <img
                  src={item.imageUrl}
                  alt={item.caption}
                  className="w-[90%] h-[32rem] mx-auto object-contain rounded-xl"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white p-4 text-sm">{item.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
            <img
              src={selectedImage}
              alt="Gallery preview"
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
