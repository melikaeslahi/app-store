import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../components/layout/MainLayout";
import NotFound from "../components/NotFound";
import Products from "../pages/Products";
import Product from "../pages/Product";
import Cart from "../pages/Cart";


export const router = createBrowserRouter([
    {
        path: '/',
        t: <elemenApp />,
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
    {
        path: '/cart', 
        element: (<MainLayout> <Cart /> </MainLayout>)
    }

]) 