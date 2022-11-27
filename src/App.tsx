import React from 'react';
import classes from './App.module.scss'
import SideBar from './components/SideBar/SideBar';
import { privateRoutes, publicRoutes, RoutersPathEnum ,adminRoutes } from './router/router';
import useWindowDimensions from './нooks/useWindowDimensions'


import {
  Navigate,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Check from './components/Check/Check';
import { useAuth } from './нooks/useAuth';



 function App() {
  const { height, width } = useWindowDimensions();
  const {Auth,admin } = useAuth()
  
  console.log("ADMIN" , width)
  
  return (<div className={ classes.wrapper }>
             {(width >= 768) && <SideBar/>} 

            {Auth ? <>
                  
                  <Routes>
                      {privateRoutes.map(route =>
                        <Route path={route.path} element={route.element} />
                        )}
                      {  admin && adminRoutes.map((route) =>
                        <Route path={route.path} element={route.element}/>
                        )
                  }

                      <Route
                          path="*"
                          element={<Navigate to={RoutersPathEnum.HOME} replace />}
                      />  
                  </Routes>
                </>
          :

                <>
                  <Routes>
                      {publicRoutes.map(route =>
                        <Route path={route.path} element={route.element} >
                        </Route>
                        )}
                      <Route
                          path="*"
                          element={<Navigate to={RoutersPathEnum.LOGIN } replace />}
                      />
                  </Routes>
            </>
      }

      {(width <= 768) && <SideBar/>} 
  </div>);
}

export default App;
