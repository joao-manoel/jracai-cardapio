import React, {useState, useEffect} from 'react';
import { useCart } from '../../contexts/CartContext';

import { Container } from './styles';


type AdicionaisProps = {
  name: string;
  icon?: string;
}

interface AdicionalSelect {
  allAdicionais: Array<AdicionaisProps>;
  max_adicionais: number;
  product_name: string;
  product_id: number;
}

function AdicionalSelect({allAdicionais, max_adicionais, product_name, product_id} : AdicionalSelect) {

  const {addAdicionalInProduct, findProductAdicional, removeAdicional, countAdicional} = useCart();

  const countAdicionais = countAdicional(product_id)

  const [edit, setEdit] = useState<Boolean>(true);

  useEffect(() =>{
    if(countAdicionais >= max_adicionais){
      setEdit(false);
    }
  }, [countAdicionais, max_adicionais])

  const AmountAdicional = (name: string) => {
    const adicional = findProductAdicional(product_id, name)

    if(adicional){
      return adicional.amount
    }

    return 0;
  }

  const calcRestanteAdicionais = () => {

    let amountCart = countAdicionais
    let qtnRest = max_adicionais - amountCart

    if(amountCart <= 0){
      return max_adicionais
    }

    return qtnRest    
  }

  const handleAddAdicional = (name: string) => {
    addAdicionalInProduct(product_id, name, max_adicionais)
  }
  
  const handleRemoveAdicional = (name: string) => {
    removeAdicional(product_id, name)
  }

  return (
    <Container>
      <header>
        <h4>
          1 {product_name}
        </h4>

        {countAdicionais >= max_adicionais ? (
          <p >
            {max_adicionais}x Adicionais -
            <button onClick={() => setEdit(!edit)}>editar</button>
          </p>
        ) : (
          <p>
            Selecione {calcRestanteAdicionais()} adicionais
          </p>
        )}

      </header>

      {edit && (
        <ul>
          {allAdicionais.map(adicional => (
            <li key={adicional.name}>
              <div>
                <p>{adicional.name}</p>
              </div>
              <div>
                {AmountAdicional(adicional.name) >= 1 && (
                  <button type="button" id="dec" onClick={() => handleRemoveAdicional(adicional.name)}>-</button>
                )}
                
                <input type="text" value={AmountAdicional(adicional.name)}  disabled/>
                <button type="button" id="acre" onClick={() => handleAddAdicional(adicional.name)} >+</button>
              </div>
            </li>
          ))}
        </ul>
      )}

      
    </Container>
  );
}

export default AdicionalSelect;
