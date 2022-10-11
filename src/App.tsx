import React from 'react';
import classes from './App.module.scss'
import SideBar from './components/SideBar/SideBar';
import { privateRoutes, publicRoutes, RoutersPathEnum } from './router/router';


import {
  Navigate,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Check from './components/Check/Check';
import { useAuth } from './нooks/useAuth';


function App() {
  
  const {Auth} = useAuth()
  
  return (<>
            {Auth ?
                <div className={ classes.wrapper }>
                  <div>
                  <SideBar/>
                  </div>
                  <Routes>
                      {privateRoutes.map(route =>
                        <Route path={route.path} element={route.element} >
                            

                        </Route>
                        )}

                      <Route
                          path="*"
                          element={<Navigate to={RoutersPathEnum.HOME} replace />}
                      />  
                  </Routes>
                
                </div>
          :

          <div className={ classes.wrapper }>
                  <div>
                  <SideBar/>
                  </div>
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
                
                </div>

          
                      }
  </>);
}

export default App;
