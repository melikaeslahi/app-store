import { faStoreAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const CartTable =()=>{
    return(
    <>       
        <section className="flex flex-col m-2 p-2 ">
            <section  className="grid grid-flow-row grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 md:grid-cols-1 w-full h-full p-2 mt-2 border border-gray-300 rounded-lg">
                  <section className="w-full  flex justify-start items-center col-span-3  ">
                        <section className="relative w-2/6  h-full hover:shadow-lg hover:shadow-gray-300">
                            <section className="h-full">
                               <Link href={`/`}>
                                   <img width={500}
                                        height={300}
                                        className={'w-full cursor-pointer object-cover h-full   rounded-lg hover:object-fill  '}
                                        src={``}
                                        alt="image" />
                               </Link>
                                            
                             </section>
                         </section>

                         <section className="flex w-4/6 flex-col items-start">
                            <section className="flex   p-2 mt-1">
                                <p className="  text-sm font-bold text-pallete pl-1">Product Name: </p>
                                <p className="text-sm font-normal align-baseline text-black">
                                    Nike Shoes
                                </p>
                             </section>               
                             <section className="flex   p-2 mt-1">
                                <p className="  text-sm font-bold text-pallete pl-1">  Color: </p>
                                <p className="text-sm font-normal align-baseline text-black">
                                   red
                                </p>
                             </section>
                             <section className="flex   p-2 mt-1">
                                <p className="  text-sm font-bold text-pallete pl-1">
                                    <FontAwesomeIcon icon={faStoreAlt} /> </p>
                                <p className="text-sm font-normal align-baseline text-black">   
                                </p>
                             </section>
                             <section className="flex justify-between items-center mr-2 w-full">
                                <section className="flex border rounded-lg  border-gray-300">
                                    <button className="p-1 rounded-lg m-1 bg-pallete text-lg text-white" type="button">-</button>
                                        <input className="rounded-sm border-none w-5 p-0 " type="number" min="1" max="5" step="1" value="1" readonly="readOnly" />
                                            <button className="p-1 m-1 rounded-lg bg-pallete text-lg text-white" type="button">+</button>
                                </section>                
                                <section className="   p-2 mt-1">
                                    <button  className={'text-sm text-red-600'}>
                                       <FontAwesomeIcon icon={faTrashAlt} className={'text-pallete'} />
                                           Delete From Cart
                                    </button>
                               </section>
                             </section>
                         </section>
                   </section>
             <section className="flex  col-span-1   justify-end  items-end   h-full ">
                <section className="p-2 mt-1 flex flex-col w-full h-full justify-end items-center lg:items-end xl:items-end md:items-center  ">
                   <section className="text-red-600  mb-1"> </section>
                      <section className=" font-bold">   $5000 </section>
                    </section>
                 </section>
           </section>
     </section>
                    

    </>
     );
}
export default CartTable;