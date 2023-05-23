import React, { FC } from "react";
import { useTimer } from 'react-timer-hook';

type TimerType = {
  onExpire: () => void;
}

export const Timer: FC<TimerType> = ({onExpire}) => {

  const time = new Date();

  const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  time.setSeconds(time.getSeconds() + getRandomInt(5, 11));

  useTimer({ expiryTimestamp: time, onExpire: onExpire });

  return (
    <span className='pulse'></span>
  )
}