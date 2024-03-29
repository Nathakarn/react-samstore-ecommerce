// import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import { useContext,  } from "react";
import { Link } from "react-router-dom";

import CartItem from "./CartItem";
import { SidebarContext } from "../context/SidebarContext";
import { CartContext } from "../context/CartContext";

const Sidebar = () =>{
    const {isOpen, handleClose} = useContext(SidebarContext);
   const { cart, claerCart, total } = useContext(CartContext);

    // console.log(addToCart);

    return (
     <div className={`${isOpen ? 'right-0' : '-right-full'}  w-full bg-white fixed top-0 h-full shadow-2xl md:[35vw] xl:max-w-[30vw] 
     transition-all duration-300 z-20 px-4 lg:px-4`} 
     >
        <div className="flex items-center justify-between py-6 border-b">
            <div className="oppercase text-sm font-semibold"
            >Shopping Bag (0) 
            </div>
            {/* icon */}
            <div 
            onClick={handleClose}
            className="cursor-pointer w-8 h-8 flex items-center justify-center">
                <IoMdArrowForward className="text-2xl"/>
            </div>
        </div>
        <div className="flexflex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b">
        {cart.map((item) =>{
            return <CartItem item={item} key={item.id} />;
        })}
        </div>
        <div>
            <div className="flex w-full justify-between items-center my-1 ">
                {/* total */}
                <div className="uppercase font-semibold text-primary">
                    <span className="mr-2">Total:</span>$ {parseFloat(total).toFixed(2)}
                </div>
                {/* clear cart icon */}
                <div onClick={claerCart}
                className="cursor-pointer py-4 bg-red-500 text-white w-10 h-10 flex justify-center items-center text-xl">
                    <FiTrash2 />
                </div>
            </div>
            <Link to={'/'} 
            className="bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium "
            >
                View Cart
            </Link>
            <Link to={'/'}
            className="bg-primary flex p-4 justify-center items-center text-white w-full font-medium"
            >
                Checkout
                </Link>
        </div>
     </div>
    );
};
export default Sidebar;