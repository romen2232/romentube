import * as React from 'react';

export interface IFormProps {
  children?: React.ReactNode;
  onSubmit?: (event: React.SyntheticEvent) => void;
}

export function Form (props: IFormProps) {
  return (
    <form className="my-8 space-y-5">
        {props.children}
    </form>
  );
}
