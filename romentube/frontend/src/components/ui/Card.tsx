import * as React from 'react';

export interface ICardProps {
    children?: React.ReactNode;
}

export function Card (props: ICardProps) {
  return (
    <article className="md:border md:border-gray-300 bg-white md:shadow-lg shadow-none rounded p-10 " >
        {props.children}
    </article>
  );
}
