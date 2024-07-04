import { useEffect } from "react";
import Header from "../components/Header";
import NotFound from "../components/NotFound";
import ProductCard from "../components/ProductCard";
import { useGetAllProductsQuery } from "../slice/ProductApi";

const Home = () =>{
  const {data , isError , isLoading ,isSuccess}=  useGetAllProductsQuery();
  let newProducts; 
  useEffect(()=>{
    if (isSuccess) {
       newProducts = data.slice(0,2);
    }
  }, [data , isSuccess])
    return(<>
     <section>
        <Header/>

        <section className="container flex  flex-col items-center justify-center p-5">

            <h1 className="text-3xl hover:text-red-500 text-center">   New Products  </h1>

            <section className="p-5 container flex justify-center items-center">
            {isLoading ? <p>data is loading</p> : 
            isSuccess ?  newProducts?.map((product , index)=> <ProductCard product={product}  key={index}  />)  :
            isError ? <NotFound /> : null}
            </section>
            
        </section>
     </section>
    </>)
}
export default Home;