import React , {FC, useState} from 'react'
import BackButton from '../../components/BackButton/BackButton'
import {useTypedSelector} from '../../нooks/useTypeSelector'
import LongCard from '../../components/LongCard/LongCard'
import classes from './BagPage.module.scss'
import { ItemsType } from '../../types/product/ItemsType'
import { Link } from 'react-router-dom'
import Bag from '../../components/Bag/Bag'



const BagPage: FC= () => {
  const items = useTypedSelector(state=>state.bagItems)
  const [arrayItems, setArrayItems] = useState<ItemsType[]>(Object.values(items.items))

  return (
    <div className={ classes.page}>
    <div className={classes.wrapper}>
      
        <BackButton />
        <div className={classes.title}> Check your Bag items</div>

        {arrayItems.map(item =>
           <LongCard item={item} key={item.id}/>
          )}
        
        <div className={classes.button_box}>
          <Link to={"/checkout"} >
            <button >Checkout</button>
            </Link>
        </div>
           
                      
    </div>
    <div>
        <Bag/>
    </div>
</div>
  )
}

export default BagPage