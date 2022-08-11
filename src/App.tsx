import React from 'react';
import HomePage from './pages/HomePage/HomePage'
import Bag from './components/Bag/Bag';
import classes from './App.module.scss'


import SideBar from './components/SideBar/SideBar';
import InfoPage from './pages/InfoPage/InfoPage';
import BagPage from './pages/BagPage/BagPage';
import Checkout from './pages/Checkout/Checkout';


function App() {
  return (
    <div className={ classes.wrapper }>
      <div>
      <SideBar/>
      </div>
      <Checkout  />
      <div>
      <Bag/>
      </div>
    </div>
  );
}

export default App;
