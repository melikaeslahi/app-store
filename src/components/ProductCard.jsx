import image from '../assets/images/shoe5.png'

const ProductCard = ({product}) =>{
    return(
    <>
     <section className="w-1/4  m-2 flex justify-center items-center">
        <section  className="relative w-72 h-80 rounded-2xl bg-zinc-800">
            <section className="w-full w h-52 flex justify-center bg-red-600  rounded-t-2xl [clip-path:circle(88%_at_64%_-12%)]">
               
               <img src={image} alt={'title'} className='w-3/4 h-3/4' />

            </section>

            <section className='absolute w-full top-40 flex flex-col justify-center items-center'> 
                <section className='title'>
                    <h1 className='text-white font-bold text-lg text-center mt-3'>NIKE SHOE</h1>
                </section>
                <section className='flex justify-center items-center pt-2'>
                    <span className='text-white text-sm text-center '> SIZE:</span>
                    <span className='w-4 h-4 bg-white text-xs rounded-md ml-2 text-center'>7</span>
                    <span className='w-4 h-4 bg-white text-xs rounded-md ml-2 text-center' >8</span>
                    <span className='w-4 h-4 bg-white text-xs rounded-md   ml-2 text-center'>9</span>
                    <span className='w-4 h-4 bg-white text-xs rounded-md ml-2 text-center'>10</span>
                </section>
                <section className='flex justify-center items-center pt-2'>
                    <span className='text-white text-sm text-center '> COLOR:</span>
                    <span className='w-4 h-4 bg-white rounded-full ml-2'></span>
                    <span className='w-4 h-4 bg-red-600 rounded-full ml-2'></span>
                    <span className='w-4 h-4 bg-green-600 rounded-full ml-2'></span>

                </section>
                
                <button className='w-11/12 h-8 rounded-lg bg-white text-black hover:text-white hover:bg-red-600 px-4 m-3'>Buy</button>
            </section>
        </section>
        
     </section>
    </>
    );
}
export default ProductCard;