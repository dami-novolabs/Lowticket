import React, { useState, useEffect } from 'react';

interface CountdownProps {
  minutes?: number;
  className?: string;
  onExpire?: () => void;
}

export function Countdown({ minutes = 30, className = "", onExpire }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState(minutes * 60);
  const [isShaking, setIsShaking] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) {
      onExpire?.();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const newTime = prevTime - 1;
        
        // Shake when less than 15 minutes
        if (newTime <= 15 * 60 && newTime % 60 === 0) {
          setIsShaking(true);
          setTimeout(() => setIsShaking(false), 500);
        }
        
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onExpire]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const isUrgent = timeLeft <= 15 * 60; // Less than 15 minutes

  return (
    <span 
      className={`inline-flex items-center gap-1 ${isShaking ? 'countdown-shake' : ''} ${className}`}
    >
      <span className={`${isUrgent ? 'text-red-500' : 'text-novo-secondary'}`}>⏰</span>
      <span className={`font-mono ${isUrgent ? 'text-red-500' : 'text-novo-secondary'}`}>
        {formatTime(timeLeft)}
      </span>
    </span>
  );
}