import Header from "../Header";
import Navbar from "../Navbar";

const MainLayout =({children})=>{
    return (
     <>
       <div className="flex flex-col">
        <Navbar />
       
        <main className="w-full">
            {children}
        </main>

       </div>
     </>
    );

}
export default MainLayout;