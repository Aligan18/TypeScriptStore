import React ,{FC} from 'react'
import { IOrderInfo } from '../../types/orderInfo/orderInfo'

import classes from './Column.module.scss'

interface IColumn {
  order: IOrderInfo
  id : string
}

const Column: FC <IColumn> = ({order, id }) => {

  console.log("ORDER", order)
  return (
    <div className={ classes.wrapper}>
        <div className={classes.cell}>{id}</div>
        <div className={classes.cell}> {order.address.name} {order.address.phone}</div>
        <div className={classes.cell}>{order.data} </div>
        <div className={classes.cell}>{order.order.totalAmount}</div>
        <div className={classes.cell}>{order.status}</div>
        <div className={classes.cell}>Products</div>
        <div className={classes.cell}>Address</div>
    </div>
  )
}

export default Column