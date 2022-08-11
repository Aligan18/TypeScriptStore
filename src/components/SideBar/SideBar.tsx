import React , {FC} from 'react';
import classes from "./SideBar.module.scss"

const SideBar : FC = () => {
  return (
    <div className={ classes.wrapper}>
      
      <i className={classes.icon + " fa fa-bars"} aria-hidden="true"></i>
      <i className={classes.icon + " fa-solid fa-store"}></i> 
      <i className={classes.icon + " fa fa-shopping-bag"} aria-hidden="true"></i>
       </div>
  )
}

export default SideBar