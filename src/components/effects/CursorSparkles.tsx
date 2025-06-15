
import { useState, useEffect, useCallback } from 'react';
import { Sparkle } from 'lucide-react';

interface SparkleType {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
}

const COLORS = ['hsl(var(--primary))', 'hsl(var(--primary) / 0.8)', 'hsl(var(--primary) / 0.6)'];

export function CursorSparkles() {
  const [sparkles, setSparkles] = useState<SparkleType[]>([]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const createSparkle = () => {
      const { clientX, clientY } = e;
      
      const newSparkle: SparkleType = {
        id: Date.now(),
        x: clientX,
        y: clientY,
        size: Math.random() * 12 + 8,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      };

      setSparkles(prevSparkles => [...prevSparkles, newSparkle]);
    };

    // Throttle with requestAnimationFrame for performance
    requestAnimationFrame(createSparkle);
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSparkles(currentSparkles => 
        currentSparkles.filter(sparkle => Date.now() - sparkle.id < 1000)
      );
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {sparkles.map(({ id, x, y, size, color }) => (
        <Sparkle
          key={id}
          className="absolute animate-sparkle-out"
          style={{
            left: x,
            top: y,
            width: size,
            height: size,
            color: color,
            fill: color,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </div>
  );
}
