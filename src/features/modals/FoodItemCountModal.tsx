import React, { FC } from "react";

type FoodItemCountModalType = {
  onClose: () => void;
  text: string;
}

export const FoodItemCountModal: FC<FoodItemCountModalType> = ({onClose, text}) => {
  return (
    <div className='modalWrap'>
      <div className='modalWindow'>
        <div className='modalTitle'>How much of:</div>
        <div className='modalItemTitle'>{text}</div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  )
}