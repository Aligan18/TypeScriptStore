import HomePage from "../pages/HomePage/HomePage";
import Checkout from '../pages/Checkout/Checkout'
import BagPage from "../pages/BagPage/BagPage";
import InfoPage from "../pages/InfoPage/InfoPage";


export enum RoutersPathEnum{

    HOME ="/",
    CHECKOUT ="/checkout",
    BAG="/bag",
    INFO="/info/:id"

}

interface publicRoutesTypes {
    path : string; 
    element : React.ReactNode
}


export const publicRoutes : publicRoutesTypes[] = [
    {path: RoutersPathEnum.HOME, element: <HomePage/>},
    {path: RoutersPathEnum.CHECKOUT, element: <Checkout/>},
    {path: RoutersPathEnum.BAG, element: <BagPage/>},
    {path: RoutersPathEnum.INFO, element: <InfoPage/>},
    

]