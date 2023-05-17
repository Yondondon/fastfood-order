import React, {FC} from 'react';

type ButtonType = {
  text: string;
  action: () => void;
}

export const Button: FC<ButtonType> = ({text, action}) => {
  return (
    <button className='defaultBtn' onClick={action}>{text}</button>
  )
}