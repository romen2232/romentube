import * as React from 'react';
import {Link} from 'react-router-dom';

export interface IAnchorLinkProps {
    href: string;
    text: string;
}

export function AnchorLink (props: IAnchorLinkProps) {
  return (
    <Link className="font-bold text-blue-500 py-2 px-2 rounded -ml-2 hover:bg-blue-50 hover:text-blue-700" to={props.href}>{props.text}</Link>
  );
}
