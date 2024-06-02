import notFound from '../assets/images/notFound.jpg'
const NotFound = () =>{
    return(<>
      <section className="flex justify-center items-center">
        <img src={notFound} alt="page not found" />
      </section>
    </>);
}
export default NotFound;