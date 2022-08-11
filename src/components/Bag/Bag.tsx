import React, {FC} from 'react'
import CardList from '../CardLists/CardLists'
import ImageCard from '../ImageCard/ImageCard'
import classes from './Bag.module.scss'

const Bag : FC = () => {

  const items = [1,2,3,4,]
  return (
    <div className={ classes.wrapper}>
      <div className={ classes.bag_space}> 
          <div className={ classes.text }>
            Bag
          </div>
          <div className={classes.items}>
            <CardList  items={items} renderItem={(item:number)=> <div className={classes.image}> <ImageCard/></div>} />
          </div>
          <div className={classes.button_wrapper}>
              <button className={classes.button}>
                  <i className={classes.icon + " fa fa-shopping-bag"} aria-hidden="true"></i>
                  View Bag
              </button>
          </div>
      </div>
    </div>
  )
}

export default Bag