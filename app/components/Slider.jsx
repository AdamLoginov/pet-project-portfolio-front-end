"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2500);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <div className="slider">
      <Image src={images[currentIndex]} alt={`Slide ${currentIndex}`} width={500} height={660} />
    </div>
  );
};

export default Slider;
