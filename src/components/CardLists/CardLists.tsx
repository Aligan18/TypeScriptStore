import React , {FC} from 'react'

import classes from "./CardList.module.scss"

interface ICardListProps<T>{
  style?:{}
  items:any[];
  renderItem: (item:T)=>React.ReactNode
}


export default function CardList<T>(props:ICardListProps<T>){
   return (<div className={classes.wrapper}>{props.items.map(props.renderItem)}</div>)
}