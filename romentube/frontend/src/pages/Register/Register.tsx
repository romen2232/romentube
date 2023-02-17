import * as React from 'react';
import { Main } from '../../components/ui/Main';
import { Card } from '../../components/ui/Card';
import { RegisterCard } from './RegisterCard';


export interface IRegisterProps {
}

export function Register (props: IRegisterProps) {
  return (
    <div>
      <Main >
        <Card>
            <RegisterCard />
        </Card>
      </Main>
    </div>
  );
}
