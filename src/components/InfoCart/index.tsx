import React from 'react';
import { toast } from 'react-toastify';
import { useCart } from '../../contexts/CartContext';

import {formatPrice} from '../../utils/format'

import { Container, AsideLeft, AsideRight } from './styles';

const InfoCart: React.FC = () => {

  const {products, CreatePedido} = useCart();
  const cartSize = products.length;

  const total = formatPrice(
    products.reduce((sumTotal, product) => {
     sumTotal += product.price * product.amount
     return sumTotal
    }, 0)
  )

  const handleConcluirPedido = () => {
    if(cartSize <= 0){
      toast.error('Escolha um produto primeiro 🤷‍♂️')
      return;
    }

    const message = CreatePedido();

    toast.info('🚧 Sistema em desenvolvimento...');
    toast.info(message)
  }
  return (
    <Container>
      <AsideLeft>
        <p>Total: <span>{total}</span></p>
      </AsideLeft>
      <AsideRight>
        <button onClick={handleConcluirPedido}>
          Concluir Pedido
        </button>
      </AsideRight>
    </Container>
  );
}

export default InfoCart;