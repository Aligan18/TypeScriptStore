import React , {FC}from 'react'
import LongCard from '../../components/LongCard/LongCard'
import classes from './Checkout.module.scss'

const Checkout:FC = () => {
  return (
    <div className={ classes.wrapper }>
        <div className={ classes.address }>
            <div>
                  <div className={ classes.title}>
                  Shipping Address
                  </div>
                  <div className={ classes.info}>
                  </div>
            </div>
            <div>
                  <button className={ classes.button}> Change</button>
            </div>
        </div>
        <div className={ classes.payment}>
            <div>
                 <div className={ classes.title}>
                 Payment Method
              </div>
              <div className={ classes.info}>
              </div>
            </div>
              <div>
                  <button className={ classes.button}> Change</button>
            </div>
        </div>
        <div className={ classes.bag}>
            <div className={ classes.title}>Review you Bag  </div>
            <div className={ classes.bag_items}>
                <LongCard  />
                <div className={ classes.item}>
                    <hr className={ classes.line}/>
                </div>
                <LongCard/>
                <div className={ classes.item}>
                    <hr className={ classes.line}/>
                </div>
                <LongCard/>
                <div className={ classes.item}>
                    <hr className={ classes.line}/>
                </div>
                <LongCard/>
                <div className={ classes.item}>
                    <hr className={ classes.line}/>
                </div>  
                
            </div>
        </div>
    </div>

  )
}

export default Checkout