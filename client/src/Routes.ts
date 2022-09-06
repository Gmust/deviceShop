import AdminPanel from "./pages/AdminPanel";
import {ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "./utils/consts";
import BasketPage from "./pages/BasketPage";
import DevicePage from "./pages/DevicePage";
import MainShopPage from "./pages/MainShopPage";
import LoginForm from "./components/Auth/Login/LoginForm";
import RegistrationForm from "./components/Auth/Registration/RegistrationForm";




export const authRoutes  =[
    {
        path: ADMIN_ROUTE,
        Component: AdminPanel
    },
    {
        path:BASKET_ROUTE,
        Component: BasketPage
    }
];


export const publicRoutes =[
    {
        path:DEVICE_ROUTE + '/:id',
        Component:DevicePage
    },
        {
        path:LOGIN_ROUTE,
        Component: LoginForm
    },
    {
        path: REGISTRATION_ROUTE,
        Component: RegistrationForm
    },
    {
        path: SHOP_ROUTE,
        Component: MainShopPage
    }


];