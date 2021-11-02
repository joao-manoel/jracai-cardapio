/* eslint-disable @next/next/no-img-element */
import React, {useEffect, useState} from 'react';

import AdicionalSelect from '../AdicionalSelect';
import {Adicionais} from '../../utils/products'

import { Content, Container, InfoItem, AddProduct } from './styles';
import { useCart } from '../../contexts/CartContext';
import { formatPrice } from '../../utils/format';

interface ProductItemProps {
  id: number;
  name: string;
  price: number;
  image: string;
  max_adicionais: number;
}

function ProductItem({name, price, image, max_adicionais, id}: ProductItemProps) {

  const {addProduct, updateProductAmount, findProduct, products} = useCart();

  
  const amountProduct = () => {
    const p = findProduct(id);
    
    if(p){
      return p.amount
    }

    return 0;
  }

  const Product = () => {
    const p = findProduct(id);

    return p
  }

  const handleProductDecrement = () => {
    updateProductAmount(id, amountProduct() - 1);
  }

  const handleAddProductIncrement = () => {
    addProduct(id, name, price);
  }


  return (
    <Container>
      <Content>
        <InfoItem image={`/images/${image}`}>
          <figure />
          <div>
            <h4>{name}</h4>
            <span>{formatPrice(price)}</span>
          </div>
        </InfoItem>

        <AddProduct>
          {amountProduct() >= 1 && (
            <button type="button" id="dec" onClick={() => handleProductDecrement()}>-</button>
          )
        }
          
          <input type="text" value={amountProduct()} disabled/>
          <button type="button" id="acre" onClick={() => handleAddProductIncrement()}>+</button>
        </AddProduct>
      </Content>
      {products.map(p =>{
        if(p.id === id){
          return <AdicionalSelect key={p.id} allAdicionais={Adicionais} max_adicionais={max_adicionais} product_name={name} product_id={id}/>
        }
      })}
    </Container>
  );
}

export default ProductItem;