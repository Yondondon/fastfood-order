import React, { FC } from 'react';

type CounterType = {
  itemCount: number;
  handleCounterDecrement: () => void;
  handleCounterIncrement: () => void;
}

export const Counter: FC<CounterType> = ({itemCount, handleCounterDecrement, handleCounterIncrement}) => {
  
  
  return (
    <div className='counterWrap'>
      <button className='counterBtn' onClick={handleCounterDecrement}>
        <div className='horizontal' />
      </button>
      <div className='counterValue'>{itemCount}</div>
      <button className='counterBtn' onClick={handleCounterIncrement}>
        <div className='horizontal' />
        <div className='vertical' />
      </button>
    </div>
  )
}