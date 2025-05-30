import { useDispatch, useSelector } from "react-redux";
import { setSize } from "../../../slice/ProductSlice";

const Sizes =({sizes})=>{
    const {size:selectedSize} = useSelector(state=>state.product);
    const dispatch =useDispatch(state=>state.product);

    return(<>
         <section className='flex flex-col items-start justify-start w-2/4'>
             <h3 className='text-gray-600 text-sm'>Selected Size</h3>
              <section className='flex justify-start items-center flex-wrap mt-2'>    
              {sizes?.map((size , index)=>(
                    <span 
                    key={index}
                    className={`border mt-1 ${selectedSize === size  ? ' text-white bg-red-600' : '' }  border-red-600 p-2  cursor-pointer hover:text-white
                               hover:bg-red-600  text-xs rounded-md ml-2 text-center`}
                    onClick={()=>dispatch(setSize(size))}         
                             >
                        {size}
                        </span>
            ))}
                    
              </section>
        </section>
            
    </>);
}
export default Sizes;