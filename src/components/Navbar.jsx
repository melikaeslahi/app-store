import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../assets/react.svg';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
const Navbar =()=>{
    return(
        <>
          <section className="p-4 shadow-lg shadow-slate-200">
            <nav className="flex flex-row-reverse justify-around items-center">
                  
                <section>
                    <img src={logo} alt="logo" />
                    </section>  
               
                <ul>
                    <li><a href="#"> محصولات </a></li>
                </ul>

                <section className='relative'>
                    
                    <span>
                        <FontAwesomeIcon  className='text-xl font-bold cursor-pointer hover:text-red-600'  icon={faShoppingBag} />
                    </span>
                    <section className='absolute -top-3 -left-1'>
                        <span className='p-0.5 w-0.5 h-0.5 text-sm bg-red-600 text-white rounded-full'>0</span>
                    </section>
                </section>

            </nav>
          </section>
        </>
    )
}
export default Navbar;