/* eslint-disable @next/next/no-img-element */
import React, {useState} from 'react';
import AdicionalSelect from '../AdicionalSelect';

import { Content, Container, InfoItem, AddProduct } from './styles';

interface ProductItemProps {
  id: number;
  name: string;
  price: string;
  image: string;
  qtn_adicionais: number;
}

const Adicionais = [
  {
    name: 'Morango',
    icon: '🍓'
  },
  {
    name: 'Banana',
    icon: '🍌'
  },
  {
    name: 'Kiwi',
    icon: '🥝'
  },
  {
    name: 'Granola',
    icon: ''
  },
  {
    name: 'Cereal',
    icon: ''
  },
  {
    name: 'Paçoca',
    icon: ''
  },
  {
    name: 'Leite em pó',
    icon: ''
  },
  {
    name: 'Leite condensado',
    icon: ''
  },
  {
    name: 'Chantilly',
    icon: ''
  },
  {
    name: 'Granulado choco',
    icon: ''
  },
  {
    name: 'Granulado colorido',
    icon: ''
  },
  {
    name: 'Ovomaltine',
    icon: ''
  },{
    name: 'Disquete',
    icon: ''
  },{
    name: 'Creme de avelã',
    icon: ''
  },{
    name: 'Amendoim',
    icon: ''
  },{
    name: 'Bis preto',
    icon: ''
  },{
    name: 'Bis Branco',
    icon: ''
  },{
    name: 'Negresco',
    icon: ''
  },{
    name: 'Flocos de arroz',
    icon: ''
  },{
    name: 'Jujuba',
    icon: ''
  },{
    name: 'Cobertura de caramelo',
    icon: ''
  },{
    name: 'Cobertura de chocolate',
    icon: ''
  },{
    name: 'Cobertura de morango',
    icon: ''
  },

]

function ProductItem({name, price, image, qtn_adicionais, id}: ProductItemProps) {

  const [qnt, setQnt] = useState(0);

  const add = () =>{
    setQnt(qnt + 1);
  }

  const decrease = () =>{
    if(qnt > 0){
      setQnt(qnt - 1);
    }
  }

  return (
    <Container>

      <Content>
        <InfoItem image={`/images/${image}`}>
          <figure />
          <div>
            <h4>{name}</h4>
            <span>{price}</span>
          </div>
        </InfoItem>

        <AddProduct>
          {qnt >= 1 && (
            <button type="button" id="dec" onClick={decrease}>-</button>
          )}
          
          <input type="text" value={qnt} disabled/>
          <button type="button" id="acre" onClick={add}>+</button>
        </AddProduct>
      </Content>

      <AdicionalSelect allAdicionais={Adicionais} qtn_adicionais={qtn_adicionais} product_name='Açai 200ml'/>
    </Container>
  );
}

export default ProductItem;