import React from 'react';

import ProductItem from '../ProductItem';
import {Products} from '../../utils/products'

import { Container } from './styles';
import { useCart } from '../../contexts/CartContext';

const Catalogo: React.FC = () => {
  return (
    <Container>
      
      {Products.map(product => (
        <ProductItem key={product.id} 
          id={product.id} 
          name={product.name} 
          price={product.price} 
          image={product.image}
          max_adicionais={product.max_adicionais}
         />
      ))}

      
    </Container>
  );
}

export default Catalogo;