import React , {FC} from 'react'

import classes from "./CardList.module.scss"

export enum CardStyleEnum {
  center ="center",
  flexStart = "flex-start",
}


interface ICardListProps<T>{
  style: CardStyleEnum; 
  items:any[];
  renderItem: (item:T)=>React.ReactNode
}
const center = {
  justifyContent: "center"
}
const start = {
  justifyContent: "flex-start"
}

export default function CardList<T>(props:ICardListProps<T>){
   return (<div style={ props.style=== CardStyleEnum.center? center : start} className={classes.wrapper}>{props.items.map(props.renderItem)}</div>)
}