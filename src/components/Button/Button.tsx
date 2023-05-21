import React, {FC} from 'react';

type ButtonType = {
  text: string;
  action: () => void;
  type?: 'default' | 'close';
}

export const Button: FC<ButtonType> = ({text, action, type}) => {
  return (
    <button className={type === 'close' ? 'closeBtn' : 'defaultBtn'} onClick={action}>{text}</button>
  )
}