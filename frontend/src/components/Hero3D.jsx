import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Hero3D.css';

const Hero3D = ({ src, alt }) => {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, scale: 1 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = null;
    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const rotateY = (x - 0.5) * 18; // -9..9 deg
      const rotateX = (0.5 - y) * 12; // -6..6 deg
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setTilt({ rotateX, rotateY, scale: 1.02 });
      });
    };

    const handleEnter = () => setTilt((s) => ({ ...s, scale: 1.02 }));
    const handleLeave = () => {
      if (raf) cancelAnimationFrame(raf);
      setTilt({ rotateX: 0, rotateY: 0, scale: 1 });
    };

    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseenter', handleEnter);
    el.addEventListener('mouseleave', handleLeave);

    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseenter', handleEnter);
      el.removeEventListener('mouseleave', handleLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className="hero-3d-wrapper">
      <motion.img
        src={src}
        alt={alt}
        className="hero-3d-img"
        animate={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY, scale: tilt.scale }}
        transition={{ type: 'spring', stiffness: 200, damping: 22 }}
        style={{ transformStyle: 'preserve-3d' }}
      />
      <div className="hero-3d-glow" />
    </div>
  );
};

export default Hero3D;
