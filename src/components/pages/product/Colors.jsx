import { useDispatch, useSelector } from "react-redux";
import { setColor } from "../../../slice/ProductSlice";

const Colors =({colors})=>{
 const dispatch = useDispatch();
 const { color:selectedColor} = useSelector(state=>state.product);


return(<>
    <section className='w-2/4'>
             <h3 className='text-gray-600 text-sm'> Selected Color </h3>
             <section className='flex justify-start items-center flex-wrap w-full mt-2'>
                {colors?.map((color ,index)=>
                     
                    <span
                    key={index} 
                    className={`w-5 h-5  ${selectedColor === color ? `border-4 border-red-600 ` : ''} ${color === "black" || color === "white" ? `bg-${color}` : `bg-${color}-600`}  rounded-full ml-2 border border-gray-600 cursor-pointer`}
                    onClick={()=>dispatch(setColor(color))}
                    >

                    </span>
                )}
             </section>
             </section>
    </>);
}
export default Colors;