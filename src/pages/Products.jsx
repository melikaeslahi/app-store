import NotFound from "../components/NotFound";
import ProductCard from "../components/ProductCard";
import { useGetAllProductsQuery } from "../slice/ProductApi";

const Products =() =>{

    const {data , isError , isLoading ,isSuccess}= useGetAllProductsQuery();
     
    

    return(
    <>
    <section className="flex flex-col items-center justify-center mt-5 ">
     <h1 className="text-red-600 font-bold text-3xl p-5">All Products</h1>
    
     <section className="container w-3/4 flex justify-around items-center flex-wrap" >
      
     {isLoading ? <p>data is loading</p> : 
      isSuccess ? data.map((product , index)=> <ProductCard product={product}  key={index}  />)  :
      isError ? <NotFound /> : null}
      
      </section>
    </section>
    </>
    );
}
export default Products;