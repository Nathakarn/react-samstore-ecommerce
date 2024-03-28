import { IoMdClose, IoMdRemove } from "react-icons/io";
import { Link } from "react-router-dom";


Link

const CartItem = ({item}) =>{
    // destructure item
    const {id, title, image, price, amout} = item;
    return(
        <div className="flex">
       <div className="w-full min-h-[150px] flex items-center gap-x-4">
        {/* image */}
        <Link to={`/product/${id}`}>
            <img className="max-w-[80px]" src={image} alt="" />
        </Link>
        <div className="w-full flex flex-col">
            {/* title & remove icon */}
            <div className=" flex justify-between mb-2">
                    {/* title */}
                    <Link to={`/product/${id}`}
                    className="text-sm  oppercase font-medium max-w-[240px] text-primary hover:underline "
                    >
                        {title}
                    </Link>
                {/* remove */}
                <div className="text-xl cursor-pointer">
                    <IoMdClose className="text-gray-500 hover:text-red-600 transition" />
                </div>
            </div>
            <div className="bg-pink-200 flex gap-x-2 h-[36px] text-sm">
                {/* qty */}
                <div className="">
                {/* minus icon */}
                <IoMdRemove />
                </div>
                    <div>
                        {/* amount */}
                        1
                    </div>
                <div>
                    {/* item price */}
                </div>
                <div>
                    {/* final pric */}
                </div>
            </div>
        </div>

       </div>
    </div>
         );
};
export default CartItem;

