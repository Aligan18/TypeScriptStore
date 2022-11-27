import React , {FC, useState, useEffect} from 'react'
import { IOrder } from '../../types/orderInfo/orderInfo'
import { ItemsType } from '../../types/product/ItemsType'
import classes from './ProductForm.module.scss'

interface IProductForm {
    closeModal : (flag: null) => void 
    product : IOrder
}

const ProductForm: FC <IProductForm >= ({closeModal, product}) => {
  const  [items, setItems ] = useState<ItemsType[]>()

  useEffect(()=>{
      const arrayProduct= Object.values(product.items)
      setItems(arrayProduct)
  },[])
 
    const Quantity =(key: string)=>{
        const keyTyped = key as keyof typeof product.quantity;
        const value = product.quantity[keyTyped];
        return value
    }
      
  return (
    <div className={classes.wrapper}>
    <div className={classes.cross}>
                      <i onClick={()=>closeModal(null)} className="fa-regular fa-circle-xmark"></i>
    </div>
   <div className={classes.info}>PRODUCT INFO</div> 
    <hr/>
    {items?.map((item, index)=>
        <div className={classes.title}><div>{item.name}</div><div>{`${Quantity(item.id)} x ${item.unitPrice} тг`}</div></div>
        
    )}
     
     
  </div>
  )
}

export default ProductForm