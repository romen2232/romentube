import * as React from 'react';

export interface ITitleProps {
  title: string;
}

export function Title (props: ITitleProps) {
  return (
    <div className="flex flex-col items-center space-y-3">
                <h1 className="text-3xl font-semi-bold leading-normal" >
                    {props.title}
                </h1>
            </div>
  );
}
