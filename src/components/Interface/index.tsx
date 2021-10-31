import React, { ReactNode } from 'react';

import { Container } from './styles';

interface InterfaceProps{ 
  children: ReactNode;
}

export function Interface({children}: InterfaceProps) {
  return (
    <Container>
      {children}
    </Container>
  );
}