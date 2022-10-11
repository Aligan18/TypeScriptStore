import React, {FC, useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { RoutersPathEnum } from '../../router/router'
import { ItemsType } from '../../types/product/ItemsType'
import useActions from '../../нooks/useActions'
import { useTypedSelector } from '../../нooks/useTypeSelector'
import CardList, { CardStyleEnum } from '../CardLists/CardLists'
import ImageCard from '../ImageCard/ImageCard'
import classes from './Bag.module.scss'
import Check from '../Check/Check';
import { createBrowserHistory } from 'history';
import { IAddress } from '../../types/address/address'

interface IBag{
  address?:IAddress
}

const Bag : FC<IBag> = (address) : any=> {
 
  const {items,totalAmount } = useTypedSelector(state=> state.bagItems)

  const [arrayItems , setArrayItems] = useState(Object.values(items))
 const history = createBrowserHistory()

    console.log('history',history)

  useEffect(()=>{
    setArrayItems(Object.values(items))

  },[items])
  

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

            {history.location.pathname ===  RoutersPathEnum.BAG?
               <div className={classes.button_wrapper}>
               <Link to={RoutersPathEnum.CHECKOUT} >
                 <button  className={classes.button}>
                     <i className={classes.icon + " fa fa-shopping-bag"} aria-hidden="true"></i>
                     Checkout
                 </button>
               </Link>
             </div>
             :
             <div className={classes.button_wrapper}>
              <Link to={RoutersPathEnum.BAG} >
                <button  className={classes.button}>
                    <i className={classes.icon + " fa fa-shopping-bag"} aria-hidden="true"></i>
                    View Bag
                </button>
              </Link>
            </div>
            
            }
           
            
        </div>
          
      </div>
    )
  
                                

 
}

export default Bag