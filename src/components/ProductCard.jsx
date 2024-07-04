import { Link } from "react-router-dom";

 

const ProductCard = ({product}) =>{
     
    const {id , title , sizes , colors , price , image } = product;

    return(
    <>
     <section className="w-1/4  m-2 flex justify-center items-center">
        <section  className="relative w-72 h-80 rounded-2xl bg-zinc-800">
            <section className="w-full w h-52 flex justify-center bg-red-600  rounded-t-2xl [clip-path:circle(88%_at_64%_-12%)]">
               
               <img src={`https://app-store-api.vercel.app/images/${image}`} alt={title} className='w-3/4 h-3/4' />

            </section>

            <section className='absolute w-full top-40 flex flex-col justify-center items-center'> 
                <section className='title'>
                    <h1 className='text-white font-bold text-lg text-center mt-3'> {title}  </h1>
                </section>
                <section className='flex justify-center items-center pt-2'>
                    <span className='text-white text-sm text-center '> SIZE:</span>
                    {sizes?.map((size , index)=> <span className='w-4 h-4 bg-white text-xs rounded-md ml-2 text-center' key={index}>{size}</span>)}
                </section>
                <section className='flex justify-center items-center pt-2'>
                    <span className='text-white text-sm text-center '> COLOR:</span>
                    {colors?.map((color , index)=><span className={`w-4 h-4 bg-${color}-600 rounded-full ml-2`}></span>
                     
                    )}
           

                </section>
                
                <Link to={`/products/${id}`} className='w-11/12 h-8 rounded-lg bg-white text-black text-center hover:text-white hover:bg-red-600 px-4 m-3'>Buy</Link>
            </section>
        </section>
        
     </section>
    </>
    );
}
export default ProductCard;