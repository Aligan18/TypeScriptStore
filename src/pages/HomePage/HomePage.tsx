import React, {FC, useEffect, useState} from 'react'
import { getDatabase, ref, onValue,  child, get} from "firebase/database";
import { initializeApp } from "firebase/app";
import {useTypedSelector} from '../../нooks/useTypeSelector'
import axios from 'axios'
import Bag from '../../components/Bag/Bag'
import Card from '../../components/Card/Card'
import CardLists, { CardStyleEnum } from '../../components/CardLists/CardLists'
import SearchPanel from '../../components/SearchPanel/SearchPanel'
import classes from "./HomePage.module.scss"

import {ItemsType} from '../../types/product/ItemsType'




const HomePage: FC = () => {

  const {products} = useTypedSelector(state=> state.produtcsHomePage)
  console.log("produc",products)
  const [items , setItems] =useState<ItemsType[][] >([[]])



  

useEffect(()=>{
  setItems (Object.values(products))
},[products])
console.log("products" , items)

  return (
    <div className= {classes.wrapper}>
        <div className={classes.center}>
        <SearchPanel/>
        {items.map(item=>
          <CardLists  style={CardStyleEnum.center} items={item} renderItem={(product:ItemsType) =><Card item={product} key={product.id}/>} />
          )}
        </div>
       
    </div>
  )
}

export default HomePage