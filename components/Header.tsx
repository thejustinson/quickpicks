"use client"

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  "/images/header-1.jpg",
  "/images/header-2.jpg",
  "/images/header-3.png",
  "/images/header-4.jpg",
  "/images/header-5.jpg"
];

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
          return 0;
        }
        return oldProgress + 1;
      });
    }, 100); // Update progress every 100ms

    return () => clearInterval(timer);
  }, []);

  return (
    <header className="relative h-[200px] sm:h-[250px] md:h-[300px] overflow-hidden w-full">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex]}
            alt={`Header Image ${currentIndex + 1}`}
            width={1500}
            height={750}
            className="object-center object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50 h-1/2 top-1/2" />
        </motion.div>
      </AnimatePresence>
      
      <div className="absolute bottom-2 w-16 sm:w-20 md:w-[100px] rounded-full left-1/2 -translate-x-1/2 right-0 h-1 bg-gray-800">
        <motion.div
          className="h-full duration-200 bg-gradient-to-r from-primary-accent to-fuchsia-900 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
    </header>
  );
};

export default Header;