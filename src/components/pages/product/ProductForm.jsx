import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setQty } from "../../../slice/ProductSlice";

const ProductForm =()=>{

    const dispatch = useDispatch();
   
    const {qty} = useSelector(state => state.product);    



    return(<>
    <section className='w-2/4 flex flex-col items-start justify-start'>
                <h3 className='text-gray-600 text-sm'>Quantity</h3>
                <section className="flex justify-between items-center mt-2 w-full px-1">
                   <section className="flex border rounded-lg  border-gray-300 px-3 ">
                      <button 
                       disabled={qty == 1 ? true : false} 
                       onClick={()=>qty !=1 ? dispatch(setQty(qty-1)): null}
                       className="py-1 rounded-lg bg-pallete text-xl text-red-600" 
                       type="button"
                       >-</button>
                      <input 
                       className="flex  rounded-sm  outline-none border-none w-full pl-4 text-center" 
                       type="number" 
                       min="1" 
                       max={10} 
                       step="1" 
                       value={qty} 
                       readOnly="readonly" />
                      <button 
                        disabled={ qty ==  10 ? true : false} 
                        onClick={()=>  dispatch(setQty(qty+1)) } 
                        className="py-1 rounded-lg bg-pallete text-xl text-red-600" 
                        type="button"
                        >+</button>
                   </section>
                </section>
                </section>
    </>);
}
export default ProductForm;
