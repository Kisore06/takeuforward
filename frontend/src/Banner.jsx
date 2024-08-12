import React, { useState, useEffect } from 'react';

const Banner = ({ isVisible, text, link, timer, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(timer);

  useEffect(() => {
    if (isVisible) {
      setTimeLeft(timer);  
    }
  }, [timer, isVisible]);

  useEffect(() => {
    if (isVisible && timeLeft > 0) {
      const countdown = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);

      return () => clearInterval(countdown);
    } else if (timeLeft === 0) {
      onTimeUp();
    }
  }, [isVisible, timeLeft, onTimeUp]);

  if (!isVisible) return null;

  return (
    <div className="banner">
      <p>{text}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">Click Here</a>
      <p>Time Left: {timeLeft} </p>
    </div>
  );
};

export default Banner;
