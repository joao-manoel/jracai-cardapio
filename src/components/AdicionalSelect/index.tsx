import React, {useState} from 'react';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { Container } from './styles';


type CartProps = {
  name: string;
  amount: number;
}

type AdicionaisProps = {
  name: string;
  icon?: string;
}

interface AdicionalSelect {
  allAdicionais: Array<AdicionaisProps>;
  qtn_adicionais: number;
  product_name: string;
}

function AdicionalSelect({allAdicionais, qtn_adicionais, product_name} : AdicionalSelect) {

  const [cart, setCart] = useState<CartProps[]>([]);

  const AmountAdicional = (name: string) => {
    const findAdicional = cart.find(a => a.name === name);
    const amount = findAdicional?.amount;

    if(amount){
      return amount;
    }

    return 0
  }

  const addAdicional = (name: string) => {    
    const findAdicional = cart.find(a => a.name === name);
    const amountAdicionais = cart.length;

    if(amountAdicionais >= qtn_adicionais){
      toast.error(`Voce ja selecionou ${qtn_adicionais} adicionais`);
      return;
    }

    if(findAdicional){
      const amount = findAdicional.amount + 1

      if(amount >= 1){
        toast.error('Voce ja selecionou esse adicional');
        return;
      }

      updateAdicionalAmount(name, amount)
      return;
    }

    const amount = 1;

    const newCart = [...cart, {amount, name}]
    setCart(newCart)
  }

  const removeAdicional = (name: string) => {
    try{
      const findAdicional = [...cart].find(a => a.name === name);

      if(!findAdicional){
        return toast.error('Error na remoção do adicional')
      }

      const removeAdicional = [...cart].filter( a => {
        return a['name'] !== name
      });

      setCart(removeAdicional);
    } catch {
      toast.error('Erro na remoção do adicional');
    }
  }

  const updateAdicionalAmount = (name: string, amount: number) => {
    if(amount < 1){
      return;
    }

    const updateAmountAdicional = [...cart].filter( a => {
      if(a.name === name){
        a.amount = amount;
      }

      return a;
    })

    setCart(updateAmountAdicional)
  }

  return (
    <Container>
      <header>
        <h4>
          1 {product_name}
        </h4>
        <p>Selecione até {qtn_adicionais} adicionais.</p>
      </header>

      <ul>
        {allAdicionais.map(adicional => (
          <li key={adicional.name}>
            <div>
              <p>{adicional.name}</p>
            </div>
            <div>
              <button type="button" id="dec" onClick={() => removeAdicional(adicional.name)}>-</button>
              <input type="text" value={AmountAdicional(adicional.name)}  disabled/>
              <button type="button" id="acre" onClick={() => addAdicional(adicional.name)} >+</button>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default AdicionalSelect;
