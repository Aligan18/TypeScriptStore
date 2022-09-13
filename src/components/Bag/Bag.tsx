import React, {FC, useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { RoutersPathEnum } from '../../router/router'
import { ItemsType } from '../../types/product/ItemsType'
import useActions from '../../нooks/useActions'
import { useTypedSelector } from '../../нooks/useTypeSelector'
import CardList, { CardStyleEnum } from '../CardLists/CardLists'
import ImageCard from '../ImageCard/ImageCard'
import classes from './Bag.module.scss'

const Bag : FC = () => {
 
  const {items,totalAmount } = useTypedSelector(state=> state.bagItems)

  const [arrayItems , setArrayItems] = useState(Object.values(items))

  useEffect(()=>{
    setArrayItems(Object.values(items))

  },[items])

  console.log("hello", items, Object.values(items))

  return (
    <div className={ classes.wrapper}>
      <div className={ classes.bag_space}> 
          <div className={ classes.text }>
            Bag
          </div>
          <div className={classes.items}>
            <CardList style={CardStyleEnum.flexStart}  items={arrayItems} renderItem={(item:ItemsType)=> <div key={item.id} className={classes.image}> <ImageCard item={item} img_url={item.primaryImage.medium} /></div> } />
          </div>
          <div className={classes.amount}>{totalAmount}</div>
          <div className={classes.button_wrapper}>
            <Link to={RoutersPathEnum.BAG} >
              <button  className={classes.button}>
                  <i className={classes.icon + " fa fa-shopping-bag"} aria-hidden="true"></i>
                  View Bag
              </button>
            </Link>
          </div>
          
      </div>
        
    </div>
  )
}

export default Bag