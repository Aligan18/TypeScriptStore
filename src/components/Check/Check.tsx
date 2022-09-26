import React, {FC, useState} from 'react'
import { useTypedSelector } from '../../нooks/useTypeSelector'
import classes from './Check.module.scss'


const Check : FC= () => {
    const {totalAmount,quantity} = useTypedSelector(state=> state.bagItems)
    const [shippingAmount,setShippingAmount] = useState(1000)



  return (
<div className={ classes.check_space}>
  <div className={classes.wrapper}>
     <div className={classes.title}>Order Summary</div>
     <div className={classes.total}>
        <div>Items:</div> <div>{totalAmount}</div>
     </div>
     <div className={classes.total}>
      <div>Shipping: </div> <div>{shippingAmount} тг</div>
      </div>
     <div className={classes.total}>
     <div>Gift Card: </div> <div>0 тг</div>
      </div>
      <hr></hr>
     <div className={classes.order}>
      <div>Order Total:</div> <div>{totalAmount+shippingAmount} тг</div>
      </div>
     <hr></hr>
     <div  className={classes.button}>Place your order</div>
  </div>
</div>
)}

export default Check