import React, { FC } from 'react';
import { useTimer } from 'react-timer-hook';

type TimerType = {
  expiryTimestamp: Date;
  onExpiry?: () => void;
}

export const Timer: FC<TimerType> = ({ expiryTimestamp, onExpiry }) => {

  const { minutes, seconds } = useTimer({ expiryTimestamp, onExpire: onExpiry });

  return (
    <div>{`${minutes}:${seconds < 10 ? '0' + seconds : seconds}`}</div>
  )
}