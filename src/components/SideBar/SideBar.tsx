import React , {FC} from 'react';
import classes from "./SideBar.module.scss"

const SideBar : FC = () => {
  return (
    <div className={ classes.wrapper}>
      
      <i className={classes.icon + " fa fa-bars"} aria-hidden="true"></i>
      <i className={classes.icon + " fa-solid fa-store"}></i> 
      <div className={classes.products}>
          <div className={classes.item}>
            <i className={classes.icon_box + " fa-solid fa-tv"}></i>
          </div>
          <div className={classes.item}>
            <i className={classes.icon_box + " fa-regular fa-clock"}></i>
          </div>
          <div className={classes.item}>
          <i className={classes.icon_box + " fa-solid fa-mobile-screen-button"}></i>
          </div>
          <div className={classes.item}>
          <i className={classes.icon_box + " fa-solid fa-laptop"}></i>
          </div>

      </div>
      <i className={classes.icon + " fa fa-shopping-bag"} aria-hidden="true"></i>
       </div>
  )
}

export default SideBar