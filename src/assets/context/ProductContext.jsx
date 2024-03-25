import { createContext, useState, useEffect } from "react";
import axios from "axios";
//create context

export const ProductContext = createContext();

const ProductProvider = ({ children }) =>{
    // product state
    const [products, setProducts] = useState([]);
    //fetch products
    useEffect(() => {
        const fetchProducts = async() => {
          try{
    
            const resp = await axios.get("https://fakestoreapi.com/products");
            if(resp.data.length === 0){
              console.log("No Data on API")
            } else{
                setProducts(resp.data)
            }
            
          }catch(err){
            console.log(err.message)
          }
        }
      fetchProducts();
    },[]) 
    // console.log(products)
    return (
        // ส่งค่า products ผ่าน value
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;