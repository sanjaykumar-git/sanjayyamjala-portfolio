
import React from 'react';

const AnimatedBackground = () => {
  const particlesCount = 30;
  const particles = Array.from({ length: particlesCount });

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
      {particles.map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            '--x-start': `${Math.random() * 100}vw`,
            '--size': `${Math.random() * 3 + 1}px`,
            '--duration': `${Math.random() * 10 + 10}s`,
            '--delay': `-${Math.random() * 10}s`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default AnimatedBackground;
