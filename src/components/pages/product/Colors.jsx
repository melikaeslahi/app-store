const Colors =({colors})=>{
 
return(<>
    <section className='w-2/4'>
             <h3 className='text-gray-600 text-sm'> Selected Color </h3>
             <section className='flex justify-start items-center flex-wrap w-full mt-2'>
                {colors?.map((color ,index)=>
                    <span
                    key={index} 
                    className={`w-5 h-5  bg-${color}-600 rounded-full ml-2 border border-gray-600 cursor-pointer`}></span>
                )}
             </section>
             </section>
    </>);
}
export default Colors;