import React , {FC,useState,useEffect}from 'react'
import LongCard from '../../components/LongCard/LongCard'
import { useTypedSelector } from '../../нooks/useTypeSelector'
import classes from './Checkout.module.scss'
import {ItemsType} from '../../types/product/ItemsType'
import CardList from '../../components/CardLists/CardLists'
import {CardStyleEnum} from '../../components/CardLists/CardLists'
import Bag from '../../components/Bag/Bag'

const Checkout:FC = () => {
    const {items,quantity,totalAmount} = useTypedSelector(state=>state.bagItems)
    const [arrayItems , setArrayItems] = useState(Object.values(items))

    useEffect(()=>{
      setArrayItems(Object.values(items))
  
    },[items])

  return (
  <div className={ classes.page}>
    <div className={ classes.wrapper }>
        <div className={ classes.address }>
            <div>
                  <div className={ classes.title}>
                  Shipping Address
                  </div>
                  <div className={ classes.info}>
                  </div>
            </div>
            <div>
                  <button className={ classes.button}> Change</button>
            </div>
        </div>
        <div className={ classes.payment}>
            <div>
                 <div className={ classes.title}>
                 Payment Method
              </div>
              <div className={ classes.info}>
              </div>
            </div>
              <div>
                  <button className={ classes.button}> Change</button>
            </div>
        </div>
        <div className={ classes.bag}>
            <div className={ classes.title}>Review you Bag  </div>
            <div className={ classes.bag_items}>
            <CardList   style={CardStyleEnum.center}  
                        items={arrayItems} 
                        renderItem={(item:ItemsType)=> <>
                                <LongCard item={item} />
                                <div className={ classes.item}>
                                    <hr className={ classes.line}/>
                                </div> </>} />
               
            </div>
        </div>
    </div>
    <div>
        <Bag/>
    </div>
  </div>

  )
}

export default Checkout