import HomePage from "../pages/HomePage/HomePage";
import Checkout from '../pages/Checkout/Checkout'
import BagPage from "../pages/BagPage/BagPage";
import InfoPage from "../pages/InfoPage/InfoPage";


interface publicRoutesTypes {
    path : string; 
    element : React.ReactNode
}


export const publicRoutes : publicRoutesTypes[] = [
    {path: '/', element: <HomePage/>},
    {path: '/checkout', element: <Checkout/>},
    {path: '/bag', element: <BagPage/>},
    {path: '/info', element: <InfoPage/>},
    

]