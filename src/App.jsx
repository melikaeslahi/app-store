import { Helmet } from "react-helmet"
import MainLayout from "./components/layout/MainLayout"
import Home from "./pages/Home"


 

function App() {
 

  return (
    <>
        <MainLayout>
          <Helmet>وبسایت فروشگاهی</Helmet>
           <Home />
        </MainLayout>
    </>
  )
}

export default App
