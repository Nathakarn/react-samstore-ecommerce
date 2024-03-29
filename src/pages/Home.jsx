import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import Product from "../components/Product";
import Hero from "../components/Hero";
// import Footer from "../components/Footer";

const Home = () => {

    const { products } = useContext(ProductContext);
    // console.log(products);

    const filteredPrrducts = products.filter((item) =>{
        return (
            item.category === "men's clothing" || item.category === "women's clothing" 
        );
    });
    // console.log(filteredPrrducts);

    return (
    <div>
        <Hero />
        <section className="py-16">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grids-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
                    {filteredPrrducts.map((products) =>{
                        return  <Product products={products} key={products.id} />;
                        
                    })}
                </div>
            </div>
        </section>
    </div>);
};

export default Home;