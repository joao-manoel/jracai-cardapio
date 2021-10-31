/* eslint-disable @next/next/no-img-element */
import React from 'react';


import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <img src={`/images/logo.png`} alt="JR açai Logo" />
    </Container>
  );
}

export default Header;