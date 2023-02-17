import * as React from 'react';

export interface IUserPhotoProps {
}

export function UserPhoto (props: IUserPhotoProps) {
  return (
    <div className="user-photo">
      <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" />
    </div>
  );
}
