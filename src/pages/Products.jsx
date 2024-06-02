import ProductCard from "../components/ProductCard";

const Products =() =>{
    return(
    <>
    <section className="flex flex-col items-center justify-center mt-5 ">
     <h1 className="text-red-600 font-bold text-3xl p-5">همه ی محصولات</h1>

     <section className="container w-3/4 flex justify-around items-center flex-wrap" >
      <ProductCard product={'product'}   />

      <ProductCard product={'product'}   />

      <ProductCard product={'product'}   />

      <ProductCard product={'product'}   />

      <ProductCard product={'product'}   />

      <ProductCard product={'product'}   />

      <ProductCard product={'product'}   />

      </section>
    </section>
    </>
    );
}
export default Products;