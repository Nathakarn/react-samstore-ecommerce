import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { ProductContext } from "../context/ProductContext";

const ProductDetails = () => {
    const { id } = useParams();
    const { products } = useContext(ProductContext);
    const {addToCart} = useContext(CartContext);

    const product = products.find((item) => {
        return item.id === parseInt(id);
    });
    
    console.log(id);
    console.log(product); 
    //    // ตรวจสอบว่า id มีค่าหรือไม่
    //    if (!id) {
    //        return (
    //            <div>
    //                <p>No ID found.</p>
    //            </div>
    //        );
    //    }
    
    //    // ถ้า id มีค่า ให้แสดง ID และข้อมูลสินค้า
    //    return (
    //        <div>
    //            <p>Product Details</p>
    //            <p>ID: {id}</p>
    //        </div>
    //    );
    if(!product) {
        return (
            <section className="h-screen flex justify-center items-center">
                Loading...
            </section>
        );
    }
    //destructure
    const {title, price, description, image} = product ;
    return (
        <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">

            <div className="container mx-auto">
                {/* wrapper img&text */}
                <div className="flex flex-col lg:flex-row items-center">
                {/* image */}
                    <div className="flex flex-1 mb-8 lg:mb-0 justify-center items-center">
                        <img className="max-w-[200px] lg:max-w-sm" 
                        src={image} alt="" />
                    </div>
                {/* text */}
                    <div className="flex-1 text-center lg:text-left ">
                        <h1 className="text-[26px] text-center font-medium mb-2 max-w-[450px] mx-auto">
                            {title}
                        </h1>
                        <div className="text-xl text-red-500 text-center font-medium mb-6">
                            $ {price}
                        </div>
                        <p className="mb-8">
                            {description}
                        </p>  
                       <div className="flex justify-center">
                        <button 
                            onClick={() => addToCart(product, product.id)}
                            className="bg-primary py-4 px-8 text-white "
                            >
                            Add To Cart
                            </button> 
                       </div> 
                    </div>

                </div>               
            </div>
        </section>
    );
};

export default ProductDetails;
