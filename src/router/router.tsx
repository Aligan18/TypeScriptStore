import HomePage from "../pages/HomePage/HomePage";
import Checkout from '../pages/Checkout/Checkout'
import BagPage from "../pages/BagPage/BagPage";
import InfoPage from "../pages/InfoPage/InfoPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import MyOrdersPage from "../pages/MyOrdersPage/MyOrdersPage";


export enum RoutersPathEnum{

    HOME ="/",
    CHECKOUT ="/checkout",
    BAG="/bag",
    INFO="/info/:id",
    LOGIN ='/login',
    REGISTRATION= '/registration',
    MY_ORDERS_PAGE='/my_orders'
}

interface publicRoutesTypes {
    path : string; 
    element : React.ReactNode
}


export const publicRoutes : publicRoutesTypes[] = [
    {path: RoutersPathEnum.HOME, element: <HomePage/>},
    {path: RoutersPathEnum.BAG, element: <BagPage/>},
    {path: RoutersPathEnum.INFO, element: <InfoPage/>},
    {path: RoutersPathEnum.LOGIN, element: <LoginPage/>},
    {path: RoutersPathEnum.REGISTRATION, element: <RegistrationPage/>}
    

]

export const privateRoutes : publicRoutesTypes[] = [
    {path: RoutersPathEnum.HOME, element: <HomePage/>},
    {path: RoutersPathEnum.CHECKOUT, element: <Checkout/>},
    {path: RoutersPathEnum.BAG, element: <BagPage/>},
    {path: RoutersPathEnum.INFO, element: <InfoPage/>},
    {path: RoutersPathEnum.MY_ORDERS_PAGE, element: <MyOrdersPage/>},
]