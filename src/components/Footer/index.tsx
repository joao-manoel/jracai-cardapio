/* eslint-disable @next/next/no-img-element */
import React from 'react'

import {Container} from './styles';

export default function Footer() {
  return (
    <Container>
      <span>by the powers of</span> 
      <img src="./images/whatzcardapio-logo.png" alt="whatzcardapio" />
    </Container>
  )
}
