import shoe from '../assets/images/shoe5.png'
const Product = ()=>{
    return(<>
    <section className='flex justify-center mt-10'>
     
       <section className=" container  w-full flex h-96">
         <section className=" w-2/5   bg-red-600  h-full rounded-lg  flex justify-center items-center"> 
            <img src={shoe} alt="image" className='w-52 h-52 ' />
            </section>
         <section className="w-3/5 flex  flex-col items-start justify-start p-10">  
               <h1 className='text-2xl font-bold '>Nike Shoes</h1>
               <h3 className='text-gray-600 text-lg pb-4' >white</h3>

               <section className='flex w-full justify-between items-center'>

                <section>
                  <h3 className='text-gray-600 text-sm'>price</h3>
                  <span className='text-red-600 text-xl'>$200.00</span>
                </section>

                <section className='w-2/4 flex flex-col items-start justify-start'>
                <h3 className='text-gray-600 text-sm'>quantity</h3>
                <span className='text-red-600 text-xl'>$200.00</span>

                </section>

               </section>
         </section>
         </section>

       </section>
    </>);
}
export default Product;