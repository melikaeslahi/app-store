import { useSelector } from "react-redux";

const Sidebar =()=>{

    const { cartTotalAmount ,cartTotalQty} =  useSelector(state=>state.cart)
    return(<>
    <section className="flex flex-col justify-center items-center p-3 mt-2  w-full h-3/4 lg:w-2/6 xl:w-2/6 md:w-full border border-gray-300  shadow-lg shadow-gray-200 rounded-lg ">
      <section className="flex flex-col justify-center mt-2 items-center w-full">
                <section className="flex justify-between items-center mb-1 pb-3 w-full">
                    <p className="text-sm"> products price({cartTotalQty}) </p>
                    <p className="text-sm"> ${cartTotalAmount} </p>

                </section>
                <section className="flex justify-between items-center mb-1 pb-3 w-full">
                    <p className="text-sm">     Total price </p>
                    <p className="text-sm"> $ {cartTotalAmount} </p>
       
                </section>

                <section className={`flex justify-between items-center mb-1 pb-3 w-full`}>
                <button 
                type="submit" 
                className={`bg-red-600 text-white rounded-lg  my-2  px-6 py-2  w-full`}> 
                  Continue To Order   
                </button>

            </section>

            </section>
            </section>
       
    </>);
}
export default Sidebar;