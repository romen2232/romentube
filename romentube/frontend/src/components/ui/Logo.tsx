import * as React from 'react';
import '../../assets/youtube-icon.svg';

export interface ILogoProps {
    src: string;
    alt: string;
}

export function Logo (props: ILogoProps) {
  return (
    <div className="logo">
        <img src={props.src} alt={props.alt} />
    </div>
  );
}
