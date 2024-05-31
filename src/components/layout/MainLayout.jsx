import Header from "../Header";
import Navbar from "../Navbar";

const MainLayout =({children})=>{
    return (
     <>
       <div className="flex flex-col">
        <Navbar />
       
        <main>
            {children}
        </main>

       </div>
     </>
    );

}
export default MainLayout;