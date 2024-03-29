import { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../context/SidebarContext";
import { BsBag } from "react-icons/bs"
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg"

const Header = () =>{
    const [isActive, setIsActive] = useState(false); //header state
    const { isOpen , setIsOpen} = useContext(SidebarContext);
    const { itemAmount } = useContext(CartContext);
    // event listener
    useEffect(()=>{
      window.addEventListener('scroll', ()=>{
        window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
      });
    });
    return ( 
      <header className={`${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'} fixed w-full z-10 transition-all`}>
        <div className="container mx-auto flex items-center justify-between h-full"> 
           {/*logo  */}
          <Link to={'/'}>
            <div>
              <img className="w-[40px]" 
              src={Logo} alt="" />
            </div>
          </Link>

          {/* cart */}
          <div 
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative "
          >
            <BsBag className="text-2xl"/>
              <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] text-white rounded-full flex justify-center items-center"> 
                {itemAmount}
              </div>
            </div>
        </div>
      </header>
        
 );
};
export default Header;