"use client"
import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="sm:flex sm:flex-col sm:gap-24 md:flex-row lg:flex-row md:gap-6 sm:gap-6 lg:gap-8 ">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="flex flex-col items-center">
            <Transition
              show={value !== undefined}
              enter="transition-opacity duration-1000"
              enterFrom="opacity-0"
              enterTo="opacity-100"
            >
              <div className='bg-slate-700 h-24 w-20 flex justify-center item-center flex-col mt-5'>
              <div className="text-white font-bold text-5xl md:text-7xl lg:text-6xl text-center font-mono">{value < 10 ? `0${value}` : value}</div>
              <div className="text-white text-center  font-light">{unit.toUpperCase()}</div>
              </div>
            </Transition>
          </div>
        ))}
      </div>

  );
};

export default CountdownTimer;