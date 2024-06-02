import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../components/layout/MainLayout";
import NotFound from "../components/NotFound";
import Products from "../pages/Products";
import Product from "../pages/Product";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NotFound />,


    },
     {
        path: '/products',
        element: (<MainLayout> <Products /> </MainLayout>)
    },

    {
        path: '/products/:productId',
        element: (<MainLayout> <Product /> </MainLayout>)
    },
    // {
    //     path: '/cart', 
    //     element: (<MainLayout> <CartTable></CartTable> </MainLayout>)
    // }

]) 