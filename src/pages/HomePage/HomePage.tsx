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
import useWindowDimensions from '../../нooks/useWindowDimensions';




const HomePage: FC = () => {

  const {products} = useTypedSelector(state=> state.produtcsHomePage)
  console.log("produc",products)
  const [items , setItems] =useState<ItemsType[][] >([[]])
  const [findItems, setFindItems] = useState<ItemsType[][]>([[]])
  const [searchValue, setSearchValue] = useState<string>("")
  const { height, width } = useWindowDimensions();

  useEffect(()=>{
    setItems (Object.values(products))
  },[products])


  useEffect(()=>{
      if (searchValue!== ""){
        const array:any[] =[]
        
        items.map((item)=>{
             const findProduct  =  item.filter(product =>product.name.includes(searchValue))
             console.log("findProduct", findProduct)
              array.push(findProduct) })
        setFindItems( array )    
      }
  },[searchValue])

  console.log("searchValue" , searchValue)

  return (
    
    <div className= {classes.wrapper}>
        <div className={classes.center}>
        <SearchPanel searchValue={searchValue} setSearchValue={setSearchValue}/>
        {searchValue ==="" ? 
          items.map(item=>
            <CardLists  style={CardStyleEnum.center} items={item} renderItem={(product:ItemsType) =><Card item={product} key={product.id}/>} />
            )
        :
          findItems.map(findItem=>
          <CardLists  style={CardStyleEnum.center} items={findItem} renderItem={(product:ItemsType) =><Card item={product} key={product.id}/>} />
          )
        }
        </div>
        <div>

          {width >= 768 && <Bag/>}
        </div>
     </div>  
    
  )
}

export default HomePage