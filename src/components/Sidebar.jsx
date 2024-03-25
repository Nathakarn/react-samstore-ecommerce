import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";

import CartItem from "./CartItem";
import { SidebarContext } from "../assets/context/SidebarContext";
import { useContext, useState } from "react";
import { CartContext } from "../assets/context/CartContext";

const Sidebar = () =>{
    const {isOpen, handleClose} = useContext(SidebarContext);
    const { addToCart } = useContext(CartContext);

    console.log(addToCart);

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
     </div>
    );
};
export default Sidebar;