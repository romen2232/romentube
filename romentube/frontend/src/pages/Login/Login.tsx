import * as React from 'react';
import { Main } from '../../components/ui/Main';
import { Card } from '../../components/ui/Card';
import { LoginCard } from './LoginCard';

export interface ILoginProps {
}

export function Login (props: ILoginProps) {
  return (
    <Main >
        <Card>
            <LoginCard />
        </Card>
    </Main>
  );
}
