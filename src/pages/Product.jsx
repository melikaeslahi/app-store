import { useState } from 'react';
import shoe from '../assets/images/shoe5.png'
import { useNavigate, useParams } from 'react-router-dom';
import { useGetProductQuery } from '../slice/ProductApi';
import ProductForm from '../components/pages/product/ProductForm';
import Sizes from '../components/pages/product/Sizes';
import Colors from '../components/pages/product/Colors';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../slice/CartSlice';
const Product = ()=>{
   const {productId}  = useParams();
   const {data:product , isFetching , isSuccess } = useGetProductQuery(productId);
   const {color , size , qty} = useSelector(state=>state.product);
   
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    navigate("/cart");
};

   
    return(<>
    <section className='flex justify-center mt-10'>
      {isFetching ? <p>data is loading</p> : isSuccess ?
       <section className=" container w-full flex items-center h-96">
      
          <section className=" w-2/5 bg-red-600 h-full rounded-lg flex justify-center items-center"> 
            <img src={`${product.image}`} alt="image" className='w-52 h-52 transform duration-500 ease-in-out hover:scale-105' />
           </section>


         {/* details */}
         <section className="w-3/5 flex flex-col items-start justify-start p-10">  
               <h1 className='text-2xl font-bold '>{product.title}</h1>
               <h3 className='text-gray-600 text-lg pb-4' > {color!== null ? color : "selected your color" }</h3>
               <section className='flex w-full justify-between items-center'>
                <section>
                  <h3 className='text-gray-600 text-sm'>Price</h3>
                  <span className='text-red-600 text-xl'>$ {product.price}</span>
                 </section>
                 <ProductForm />

               </section>
             
                {/* selected color && size */}
               <section className='flex justify-between items-start w-full mt-10'> 
                <Colors colors={product.colors}  />      
                <Sizes sizes={product.sizes} />
               </section>
             {/* add to cart */}
               <section className='flex w-full items-center justify-between mt-10'> 
                 <section className=''>  <h3 className='text-gray-600 text-sm'>Total Price</h3>
                   <span className='text-red-600 text-xl'>$200.00</span>
                  </section>

                 <section className='w-3/4 flex justify-start'> 
                   <button 
                   className={`w-3/4 ${color !== null && size !==null ? 'text-red-600 hover:text-white hover:bg-red-600 bg-white border border-red-600' : 'hover:bg-yellow-400 hover:text-white bg-white text-yellow-400 border border-yellow-400' }  py-3  rounded-lg`} 
                   disabled={color !==null && size !==null ? false : true } 
                   onClick={()=>handleAddToCart({...product , cartQty:qty , cartColor:color , cartSize:size})}       
                   >Add To Cart</button>
                 </section>
           
         </section>
         </section>
        
         </section>
:null }
       </section>
    </>);
}
export default Product;