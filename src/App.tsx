import React from 'react';
import classes from './App.module.scss'
import SideBar from './components/SideBar/SideBar';
import { publicRoutes } from './router/router';


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Check from './components/Check/Check';


function App() {
  
  
  
  return (
          
                <div className={ classes.wrapper }>
                  <div>
                  <SideBar/>
                  </div>
                  <Routes>
                      {publicRoutes.map(route =>
                        <Route path={route.path} element={route.element} >
                            

                        </Route>
                        )}
                  </Routes>
                
                </div>
          
          
  );
}

export default App;
