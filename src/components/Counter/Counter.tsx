import React , {FC} from 'react'
import classes from './Counter.module.scss'
import useActions from '../../нooks/useActions'
import { ItemsType } from '../../types/product/ItemsType'
import { useTypedSelector } from '../../нooks/useTypeSelector'

interface ICounter {
  item : ItemsType
}

const Counter: FC<ICounter>= ( {item }) => {

  const {quantity}= useTypedSelector(state=>state.bagItems)
  const {decreaseItem, increaseItem}= useActions()


  return (
    <div className={classes.wrapper}>
        <div onClick={()=>increaseItem(item)} className={classes.icon}><i className="fa-solid fa-plus"></i></div>
        <div className={classes.icon}>{quantity[item.id]}</div>
        <div onClick={()=>decreaseItem(item)} className={classes.icon}><i className="fa-solid fa-minus"></i></div>
    </div>
  )
}

export default Counter