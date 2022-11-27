import React, {FC, useEffect, useState} from 'react'
import CardList, { CardStyleEnum } from '../../components/CardLists/CardLists'
import Column from '../../components/Column/Column'
import { getAllOrdersFromBase } from '../../fetching/getAllOrdersFromBase'
import classes from './AdminPage.module.scss'
import {IOrderInfo} from '../../types/orderInfo/orderInfo'


const AdminPage: FC= () => {
  const [allOrders, setAllOders]= useState({})
  const [allKeyOrders, setAllKeyOders]= useState<string[]>([])
 
  useEffect(()=>{
    getAllOrdersFromBase(setAllOders, setAllKeyOders)
  },[])

  console.log("allOrders" , allOrders)
  console.log("allKeysOrders" , allKeyOrders)
  return (
    <div className={ classes.wrapper_table}>
      <div className={ classes.box}>
      <div className={ classes.wrapper}>
        <div className={classes.cell}>Id</div>
        <div className={classes.cell}> Name</div>
        <div className={classes.cell}>Date</div>
        <div className={classes.cell}>TotalAmount </div>
        <div className={classes.cell}>Status</div>
        <div className={classes.cell}>Products</div>
        <div className={classes.cell}>Address</div>
      </div>

     <CardList style={CardStyleEnum.center} items={allKeyOrders} renderItem ={(key: string)=> <Column id={key} key={key}  order={allOrders[key as keyof typeof allOrders]}/> } />
     
      </div>

    </div>
  )
}

export default AdminPage