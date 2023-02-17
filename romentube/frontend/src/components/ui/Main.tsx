import * as React from 'react';

export interface IMainProps {
    children?: React.ReactNode;
}

export function Main (props: IMainProps) {
  return (
    <main className="md:h-screen bg-white relative flex flex-col justify-center items-center">
        {props.children}
    </main>
  );
}
