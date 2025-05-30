import Sidebar from "../pages/cart/Sidebar";

const CartLayout =({children})=>{
    return(<>
      <section className="relative w-full xl:mx-auto  xl:container">
        <section className="flex flex-col justify-center items-start lg:flex-row xl:flex-row md:flex-col py-5 my-5  ">
           
             <section className="flex flex-col p-3 ml-2 w-full xl:w-4/6 lg:w-4/6 md:w-full  rounded-lg " >
                {children} 
            </section>
            <Sidebar />
    
        </section>

     </section>

    </>);
}
export default CartLayout;
