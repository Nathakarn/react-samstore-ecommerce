import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // add to cart
    const addToCart = (id) =>{
        console.log(`item ${id} add to cart`)
    };

    return <CartContext.Provider value={{addToCart}} >
        { children}
    </CartContext.Provider>

};
export default CartProvider;