import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // add to cart
    const addToCart = (product,id) =>{
        const newItem = {...product, amount: 1};
    // check if the item is alrady in the cart
    const cartItem = cart.find((item) => {
        return item.id === id;
    });
     // if the item is alrady in the cart
     if (cartItem) {
        const newCart = [...cart].map(item => {
            if (item.id === id){
                return {...item, amount: cartItem.amount + 1 }
            } else {
                return item;
            }
        });
        setCart(newCart);
     } else {
        setCart([...cart, newItem]);
     }
    };
    console.log(cart);
    
    //remove from cart
    const removeFromCart = (id) =>{
        const newCart = cart.filter((item) =>{
            return item.id !== id;
        });
        setCart(newCart);
    } ;

    // claer cart
    const claerCart = () =>{
        setCart([]);
    };

    //increase amount
    const increaseAmount = (id) => {
        const cartItem = cart.find((item) => item.id === id);
        addToCart(cartItem, id);
      };

      //decrease amount
      const decreaseAmount = (id) => {
        const newCart = cart.map((item) => {
          if (item.id === id && item.amount > 1) {
            return { ...item, amount: item.amount - 1 };
          }
          return item;
        });
        setCart(newCart);
      };
      

    return <CartContext.Provider value={{ cart, addToCart, removeFromCart, claerCart, increaseAmount, decreaseAmount}} >
        { children}
    </CartContext.Provider>

};
export default CartProvider;