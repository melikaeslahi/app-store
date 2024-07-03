import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../assets/react.svg';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Navbar =()=>{
    const {cartItems} = useSelector(state => state.cart)
    return(
        <>
          <section className="p-4  shadow-sm shadow-slate-200 sticky">
            <nav className="flex  flex-row-reverse justify-around items-center">
                  
                <section>
                    <img src={logo} alt="logo" />
                    </section>  
               
                <ul className='flex flex-row-reverse'>
                    <li className='p-2'><Link to={'/'}>   Home</Link></li>
                    <li className='p-2'><Link to="/products">  Products </Link></li>
                </ul>

                <section className='relative'>
                    <Link to={`/cart`}>
                    <span>
                        <FontAwesomeIcon  className='text-xl font-bold cursor-pointer hover:text-red-600'  icon={faShoppingBag} />
                    </span>
                    <section className='absolute -top-3 -left-1'>
                        <span className='p-0.5 w-0.5 h-0.5 text-sm bg-red-600 text-white rounded-full'>{cartItems.length}</span>
                    </section>
                    </Link>
                 </section>

            </nav>
          </section>
        </>
    )
}
export default Navbar;