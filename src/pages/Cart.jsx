import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartLayout from "../components/layout/CartLayout";
import CartTable from "../components/pages/cart/CartTable";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Cart =()=>{
    return(<>
      <CartLayout>
      <section className="flex flex-col p-3  w-full   md:w-full border my-2 border-gray-300  shadow-lg shadow-gray-200  rounded-lg " >
        <section className="p-2 m-3 flex border-b border-pallete">
        <FontAwesomeIcon icon={faArrowLeft} className={'text-pallete text-xl font-extrabold p-2'} />
            <h1 className="text-red-600 text-lg text-right font-bold"> Cart </h1>
            <FontAwesomeIcon icon={faArrowRight} className={'text-pallete text-xl font-extrabold p-2'} />
        </section>
      <section className={``}>
            <CartTable/> 
      </section>
                
      </section>
          
      </CartLayout>
    </>);
}
export default Cart;