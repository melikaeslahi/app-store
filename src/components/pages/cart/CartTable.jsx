import { faStoreAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotal, removeFromCart } from "../../../slice/CartSlice";
import emptyCart from '../../../assets/images/emptyCart.jpeg'
import { useEffect } from "react";
const CartTable =()=>{
   
   const dispatch = useDispatch();
   const {cartItems} = useSelector(state=>state.cart)
 
    useEffect(() => {
      dispatch( getTotal());
  }, [cartItems, dispatch]);
    return(
    <>       
    {}
        <section className="flex flex-col m-2 p-2 ">
            {cartItems.length > 0 ? cartItems.map((cart , index)=>(
          <section key={index} className="grid grid-flow-row grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 md:grid-cols-1 w-full h-full p-2 mt-2 border border-gray-300 rounded-lg">
            <section className="w-full  flex justify-start items-center col-span-3  ">
              <section className="relative w-2/6  h-full hover:shadow-lg hover:shadow-gray-300">
                <section className="h-full">
                  <Link to={`/products/${cart.id}`}>
                     <img width={500}
                       height={300}
                       className={'w-full cursor-pointer object-cover h-full   rounded-lg hover:object-fill  '}
                       src={`http://localhost:9000/images/${cart.image}`}
                       alt="image" />
                   </Link>
                           
            </section>
        </section>

        <section className="flex w-4/6 flex-col items-start">
           <section className="flex   p-2 mt-1">
               <p className="  text-sm font-bold text-pallete pl-1">Product Name: </p>
               <p className="text-sm font-normal align-baseline text-black">
                   {cart.title}
               </p>
            </section>               
            <section className="flex   p-2 mt-1">
               <p className="  text-sm font-bold text-pallete pl-1">  Color: </p>
               <p className="text-sm font-normal align-baseline text-black">
                  {cart.cartColor}
               </p>
            </section>
            <section className="flex   p-2 mt-1">
               <p className="  text-sm font-bold text-pallete pl-1">
                   <FontAwesomeIcon icon={faStoreAlt} /> </p>
               <p className="text-sm font-normal align-baseline text-black"> 
               {cart.cartQty}  
               </p>
            </section>
            <section className="flex justify-between items-center mr-2 w-full">
                           
               <section className="   p-2 mt-1">
                   <button  className={'text-sm text-red-600'}
                            onClick={()=>dispatch(removeFromCart({id:cart.id}))}
                   >
                      <FontAwesomeIcon icon={faTrashAlt} className={'text-pallete'}  />
                          Delete From Cart
                   </button>
              </section>
            </section>
        </section>
  </section>
<section className="flex  col-span-1   justify-end  items-end   h-full ">
<section className="p-2 mt-1 flex flex-col w-full h-full justify-end items-center lg:items-end xl:items-end md:items-center  ">
  <section className="text-red-600  mb-1"> </section>
     <section className=" font-bold">   ${cart.price} </section>
   </section>
</section>
</section>
            )): (
            <section className="w-full flex justify-center">
            <img  src={emptyCart} className="w-52 h-52 " alt="empty cart"/>
            </section>
            )}
            
     </section>
                    

    </>
     );
}
export default CartTable;