import headerImg from '../assets/images/header.jpg';
const Header =() => {
    return(<>
    <header>
        <div>
            <img className='w-full ' src={headerImg} alt="header image"  />
        </div>
    </header>
    </>);
}
export default Header;