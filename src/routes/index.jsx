import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../components/layout/MainLayout";
import NotFound from "../components/NotFound";
import ProductDetails from "../components/ProductDetails";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NotFound />,


    },

    {
        path: '/products/:productId',
        element: (<MainLayout> <ProductDetails /> </MainLayout>)
    },
    // {
    //     path: '/cart', 
    //     element: (<MainLayout> <CartTable></CartTable> </MainLayout>)
    // }

]) 