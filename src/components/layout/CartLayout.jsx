import Sidebar from "../pages/cart/Sidebar";

const CartLayout =({children})=>{
    return(<>
      <section className="relative w-full xl:mx-auto  xl:container">
        <section className="flex flex-col justify-center items-start lg:flex-row xl:flex-row md:flex-col py-5 my-5  ">
            <Sidebar />
            <section className="flex flex-col p-3 ml-2 w-full xl:w-4/6 lg:w-4/6 md:w-full   mt-1    rounded-lg " >
                {children} 
            </section>

    
        </section>

     </section>

    </>);
}
export default CartLayout;
