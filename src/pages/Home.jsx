import Header from "../components/Header";

const Home = () =>{
    return(<>
     <section>
        <Header/>

        <section className="container flex  flex-col items-center justify-center p-5">

            <h1 className="text-3xl hover:text-red-500 text-center"> جدید ترین محصولات</h1>

            <section className="p-5">
              محصولات
            </section>
            
        </section>
     </section>
    </>)
}
export default Home;