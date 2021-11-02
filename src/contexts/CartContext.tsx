import { ReactNode, createContext, useState, useContext } from 'react';
import { toast } from 'react-toastify';

interface CartProviderProps {
  children: ReactNode;
}

type CartContextData = {
  products: ProductProps[];
  addProduct: (id: number, name: string, price: number) => void;
  updateProductAmount: (id: number, amount: number) => void;
  findProduct: (id: number) => ProductProps | undefined;
  addAdicionalInProduct: (idProduct: number, name: string, amount_max: number) => void;
  findProductAdicional: (product_id: number, name: string) => AdicionaisProps | undefined;
  removeAdicional: (product_id: number, name: string) => void;
  countAdicional: (product_id: number) => number;
  CreatePedido: () => string;
}

type AdicionaisProps = {
 // product_id: string;
  name: string;
  amount: number;
}

type ProductProps = {
  id: number;
  name: string;
  amount: number;
  price: number;
  adicionais: AdicionaisProps[];
}


export const CartContext = createContext<CartContextData>({} as CartContextData);


export function CartProvider({children}: CartProviderProps){

  const [products, setProducts] = useState<ProductProps[]>([]);

  const addProduct = (id: number, name: string, price: number) => {
    const findProduct = products.find(p => p.id === id);

    if(findProduct) {
      const amount = findProduct.amount + 1
      updateProductAmount(id, amount);
      return;
    }

    const amount = 1;
    const adicional: AdicionaisProps[] =  []
    const newCart = [...products, {id, name, amount, price, adicionais: adicional}]
    setProducts(newCart);
    return;
  }

  const removeProduct = (id: number) => {
    try{
      const findProduct = [...products].find(p => p.id === id);
      
      if(!findProduct) return toast.error('Error na remoção do produto')


      const removeProduct = [...products].filter( p => {
        return p['id'] !== id;
      })

      setProducts(removeProduct);
    } catch{
      return toast.error('Error na remoção do produto')
    }
  }

  const updateProductAmount = (id: number, amount: number) =>{
    if(amount < 1) {
      removeProduct(id);
      return;
    }

    const updateAmountProduct = [...products].filter( p => {
      if(p.id === id){
        p.amount = amount;
      }

      return p;
    })

    setProducts(updateAmountProduct);
  }

  const findProduct = (id: number) => {
    const findProduct = products.find(p => p.id === id);

    return findProduct;
  }

  const addAdicionalInProduct =  (idProduct: number, name: string, amount_max: number) => {
    const findProduct = products.find(p => p.id === idProduct);

    if(findProduct){
      const findAdicional = findProduct.adicionais.find( a => a.name === name)

      if(findProduct.adicionais.length >= amount_max){
        toast.error(`Os ${amount_max} adicionais ja foi escolhido`)
        return;
      }

      if(findAdicional){
        return toast.error(`Adicional ${name} ja foi adicionado.`);
      }


      const amount = 1

      const newAdicionais = [...findProduct.adicionais, {name, amount}]

      const updateProductAdicionais = [...products].filter( p => {
        if(p.id === idProduct){
          p.adicionais = newAdicionais
        }

        return p;
      })

      setProducts(updateProductAdicionais)
      
    }
  }

  const removeAdicional = (product_id: number, name: string) => {
    const product = products.find(p => p.id === product_id);
    
    if(product){
      const findAdicional = product.adicionais.find(a => a.name === name)

      if(!findAdicional){
        return toast.error('Error na remoção do adicional')
      }

      const removeAdicional = [...product.adicionais].filter( a => {
        return a['name'] !== name
      });

      const updateProductAdicionais = [...products].filter( p => {
        if(p.id === product_id){
          p.adicionais = removeAdicional
        }

        return p;
      })

      setProducts(updateProductAdicionais)
    }
  }

  const countAdicional = (product_id: number) => {
    const product = products.find(p => p.id === product_id);

    if(product){
      return product.adicionais.length
    }

    return 0
  }

  const findProductAdicional = (product_id: number, name: string) => {
    const findProduct = products.find( p => p.id === product_id)

    if(findProduct){
      const findAdicional = findProduct.adicionais.find( a => a.name === name)

      return findAdicional;
    }

    return undefined;
  }

  const CreatePedido = () => {
    let text = 'Gostaria de pedir'

    products.map( p => {
      text += ` ${p.amount}x ${p.name}`

      
      if(p.adicionais.length >= 1){
        text += ` com os adicionais:`
        p.adicionais.map( a => {
          text += ` ${a.name},`
        })
      }else{
        text += ` sem adicionais.`
      }
    })

    return text
  }

  return (
   
    <CartContext.Provider 
      value={{
        products, 
        addProduct, 
        updateProductAmount,
        findProduct,

        addAdicionalInProduct,
        findProductAdicional,
        removeAdicional,
        countAdicional,

        CreatePedido
      }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}