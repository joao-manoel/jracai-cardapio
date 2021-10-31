import React from 'react';
import ProductItem from '../ProductItem';

import { Container } from './styles';

const Catalogo: React.FC = () => {

  const Products = [
    {
      id: 1, 
      name: 'Açai 200ml',
      price: 'R$ 10,00',
      image: '200ml.jpg'
    },
    {
      id: 2, 
      name: 'Açai 300ml',
      price: 'R$ 15,00',
      image: '200ml.jpg'
    },
    {
      id: 3, 
      name: 'Açai 500ml',
      price: 'R$ 15,00',
      image: '500ml.jpg'
    }
  ]

  return (
    <Container>
      {Products.map(product => (
        <ProductItem key={product.id} id={product.id} name={product.name} price={product.price} image={product.image} />
      ))}
    </Container>
  );
}

export default Catalogo;