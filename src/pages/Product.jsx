import { useState } from 'react';
import shoe from '../assets/images/shoe5.png'
const Product = ()=>{
   const [counter , setCounter] = useState(1);

    return(<>
    <section className='flex justify-center mt-10'>
     
       <section className=" container w-full flex items-center h-96">

        {/* image */}
          <section className=" w-2/5 bg-red-600 h-full rounded-lg flex justify-center items-center"> 
            <img src={shoe} alt="image" className='w-52 h-52 transform duration-500 ease-in-out hover:scale-105' />
           </section>


         {/* details */}
         <section className="w-3/5 flex flex-col items-start justify-start p-10">  
               <h1 className='text-2xl font-bold '>Nike Shoes</h1>
               <h3 className='text-gray-600 text-lg pb-4' >White</h3>
               
                {/* product form */}
               <section className='flex w-full justify-between items-center'>

                <section>
                  <h3 className='text-gray-600 text-sm'>Price</h3>
                  <span className='text-red-600 text-xl'>$200.00</span>
                </section>

                <section className='w-2/4 flex flex-col items-start justify-start'>
                <h3 className='text-gray-600 text-sm'>Quantity</h3>
                <section className="flex justify-between items-center mt-2 w-full px-1">
                   <section className="flex border rounded-lg  border-gray-300 px-3 ">
                      <button 
                       disabled={counter == 1 ? true : false} 
                       onClick={()=>counter !=1 ? setCounter(counter-1): null}
                       className="py-1 rounded-lg bg-pallete text-xl text-red-600" 
                       type="button"
                       >-</button>
                      <input 
                       className="flex  rounded-sm  outline-none border-none w-full pl-4 text-center" 
                       type="number" 
                       min="1" 
                       max={10} 
                       step="1" 
                       value={counter} 
                       readOnly="readonly" />
                      <button 
                        disabled={counter ==  10 ? true : false} 
                        onClick={()=>  setCounter(counter+1) } 
                        className="py-1 rounded-lg bg-pallete text-xl text-red-600" 
                        type="button"
                        >+</button>
                   </section>
                </section>
                </section>

               </section>
             
                {/* selected color && size */}
               <section className='flex justify-between items-start w-full mt-10'>
             <section className='w-2/4'>
             <h3 className='text-gray-600 text-sm'> Selected Color </h3>
             <section className='flex justify-start items-center flex-wrap w-full mt-2'>
                    
                    <span className='w-5 h-5  bg-red-600 rounded-full ml-2 border border-gray-600 cursor-pointer'></span>
                    <span className='w-5 h-5 bg-white rounded-full ml-2 border border-gray-600 '></span>
                    <span className='w-5 h-5 bg-green-600 rounded-full ml-2 border border-gray-600' ></span>
             </section>
             </section>
             <section className='flex flex-col items-start justify-start w-2/4'>
             <h3 className='text-gray-600 text-sm'>Selected Size</h3>
              <section className='  flex justify-start items-center flex-wrap mt-2'>    
                    <span className='border mt-1 border-red-600 p-2  cursor-pointer hover:text-white hover:bg-red-600 bg-white text-xs rounded-md ml-2 text-center'>7</span>
                    <span className='border mt-1 border-red-600 p-2  cursor-pointer hover:text-white hover:bg-red-600 bg-white text-xs rounded-md ml-2 text-center' >8</span>
                    <span className='border mt-1 border-red-600 p-2  cursor-pointer hover:text-white hover:bg-red-600 bg-white text-xs rounded-md   ml-2 text-center'>9</span>
                    <span className='border mt-1 border-red-600 p-2  cursor-pointer hover:text-white hover:bg-red-600 bg-white text-xs rounded-md ml-2 text-center'>10</span>
              </section>
             </section>
               </section>
         

             {/* add to cart */}
               <section className='flex w-full items-center justify-between mt-10'> 
                 <section className=''>  <h3 className='text-gray-600 text-sm'>Total Price</h3>
                   <span className='text-red-600 text-xl'>$200.00</span>
                  </section>

                 <section className='w-3/4 flex justify-start'> 
                   <button className='w-3/4  text-red-600 hover:text-white hover:bg-red-600 bg-white py-3 border border-red-600 rounded-lg' >Add To Cart</button>
                 </section>
           
         </section>
         </section>
        
         </section>

       </section>
    </>);
}
export default Product;