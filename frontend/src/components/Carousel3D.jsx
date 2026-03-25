import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Carousel3D.css';

const Carousel3D = ({ items = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoRotateRef = useRef(null);

  const itemCount = items.length || 0;

  // Auto-rotation - each image stays visible for 10 seconds
  useEffect(() => {
    if (isPaused || itemCount === 0) {
      if (autoRotateRef.current) clearInterval(autoRotateRef.current);
      return;
    }

    autoRotateRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % itemCount);
    }, 10000); // 10 seconds

    return () => {
      if (autoRotateRef.current) clearInterval(autoRotateRef.current);
    };
  }, [itemCount, isPaused]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (itemCount === 0) return;
      if (e.key === 'ArrowRight') {
        goToSlide((currentIndex + 1) % itemCount);
      } else if (e.key === 'ArrowLeft') {
        goToSlide((currentIndex - 1 + itemCount) % itemCount);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentIndex, itemCount]);

  // Double-click handler to toggle pause
  const handleDoubleClick = useCallback(() => {
    setIsPaused((prev) => !prev);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index % itemCount);
  };

  if (itemCount === 0) return null;

  const currentItem = items[currentIndex];

  return (
    <div
      className={`carousel-container ${isPaused ? 'paused' : ''}`}
      onDoubleClick={handleDoubleClick}
    >
      <div className="carousel-display">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="carousel-active-slide"
            initial={{ opacity: 0, x: 50, filter: 'blur(10px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {currentItem.image ? (
              <img
                src={currentItem.image}
                alt={currentItem.title || `Gallery Item ${currentIndex + 1}`}
                className="carousel-main-image"
              />
            ) : (
              <div className="card-placeholder">
                <span className="item-number">{currentIndex + 1}</span>
                <p>No Image Available</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pause indicator overlay */}
      {isPaused && (
        <div className="pause-indicator show">
          <span className="pause-icon">❚❚</span>
          <span className="pause-text">Paused</span>
        </div>
      )}

      {/* Navigation Dots */}
      <div className="carousel-dots-container">
        {items.map((_, index) => (
          <motion.button
            key={index}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            whileHover={{ scale: 1.25 }}
            whileTap={{ scale: 0.9 }}
            layout
          >
            <div className="dot-inner"></div>
          </motion.button>
        ))}
      </div>

    </div>
  );
};

export default Carousel3D;
