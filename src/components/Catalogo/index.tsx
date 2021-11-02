import React from 'react';
import ProductItem from '../ProductItem';

import { Container } from './styles';

const Catalogo: React.FC = () => {

  const Products = [
    {
      id: 1, 
      name: 'Açai 300ml',
      price: 'R$ 12,00',
      image: '200ml.jpg',
      qtn_adicionais: 3
    },
    {
      id: 2, 
      name: 'Açai 400ml',
      price: 'R$ 14,00',
      image: '200ml.jpg',
      qtn_adicionais: 4
    },
    {
      id: 3, 
      name: 'Açai 500ml',
      price: 'R$ 16,00',
      image: '200ml.jpg',
      qtn_adicionais: 4
    },
    {
      id: 4, 
      name: 'Açai na marmita 1L',
      price: 'R$ 26,00',
      image: '500ml.jpg',
      qtn_adicionais: 5
    }
  ]

  return (
    <Container>
      {Products.map(product => (
        <ProductItem key={product.id} 
          id={product.id} 
          name={product.name} 
          price={product.price} 
          image={product.image}
          qtn_adicionais={product.qtn_adicionais}
         />
      ))}
    </Container>
  );
}

export default Catalogo;