import * as React from 'react';

export interface IButtonProps {
    text: string;
    type?: "button" | "submit" | "reset";
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function Button (props: IButtonProps) {
  return (
    <button className="py-2 px-6 rounded text-white btn bg-blue-500 hover:bg-blue-600" type={props.type} onClick={props.onClick}>
        {props.text}
    </button>

  );
}
