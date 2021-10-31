/* eslint-disable @next/next/no-img-element */
import React, {useState} from 'react';

import { Container, InfoContent, InputContent } from './styles';

interface ProductItemProps {
  id: number;
  name: string;
  price: string;
  image: string;
}

function ProductItem({name, price, image, id}: ProductItemProps) {

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

      <InfoContent image={`/images/${image}`}>
        <figure />
        <div>
          <h4>{name}</h4>
          <span>{price}</span>
        </div>
      </InfoContent>

      <InputContent>
        {qnt >= 1 && (
          <button type="button" id="dec" onClick={decrease}>-</button>
        )}
        
        <input type="text" value={qnt} disabled/>
        <button type="button" id="acre" onClick={add}>+</button>
      </InputContent>
    </Container>
  );
}

export default ProductItem;