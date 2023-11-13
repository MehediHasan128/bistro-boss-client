import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import OrderFood from "../Pages/OrderFood/OrderFood/OrderFood";
import Login from "../Pages/Authentication/Login/Login";
import Ragistretion from "../Pages/Authentication/Ragistretion/Ragistretion";
import DashBoard from "../Layout/DashBoard";
import Cart from "../Pages/DashBoard/Cart/Cart";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/ourMenu',
                element: <Menu />
            },
            {
                path: '/orderFood/:category',
                element: <OrderFood />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/ragistretion',
                element: <Ragistretion />
            }
        ]
    },
    {
        path: 'dashBoard',
        element: <DashBoard />,
        children: [
            {
                path: 'cart',
                element: <Cart />
            }
        ]
    }
]);

export default router;