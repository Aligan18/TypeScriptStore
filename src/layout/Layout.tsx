import React from 'react'
import Bag from '../components/Bag/Bag'
import SideBar from '../components/SideBar/SideBar'
import { ILayoutProps } from './Layout.props'
import useWindowDimensions from '../нooks/useWindowDimensions';
import classes from './Layout.module.scss'

const Layout = ({children}:ILayoutProps) => {
    const { height, width } = useWindowDimensions();

  return (
    <div className={classes.wrapper}>
        {(width >= 768) && <SideBar/>} 
        <div>{children}</div>
        {width >= 780 && <Bag/>}
        {(width <= 768) && <SideBar/>} 
    </div>
  )
}

export default Layout