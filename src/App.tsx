import React from 'react';
import HomePage from './pages/HomePage/HomePage'
import Bag from './components/Bag/Bag';
import classes from './App.module.scss'
import SideBar from './components/SideBar/SideBar';
import InfoPage from './pages/InfoPage/InfoPage';
import BagPage from './pages/BagPage/BagPage';
import Checkout from './pages/Checkout/Checkout';
import { publicRoutes } from './router/router';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {



  return (
          
                <div className={ classes.wrapper }>
                  <div>
                  <SideBar/>
                  </div>
                  <Routes>
                      {publicRoutes.map(route =>
                        <Route path={route.path} element={route.element}/>)}
                  </Routes>
                  <div>

                  <Bag/>
                  </div>
                </div>
          
          
  );
}

export default App;
