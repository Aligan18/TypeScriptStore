import React , {FC,useState,useEffect}from 'react'
import LongCard from '../../components/LongCard/LongCard'
import { useTypedSelector } from '../../нooks/useTypeSelector'
import classes from './Checkout.module.scss'
import {ItemsType} from '../../types/product/ItemsType'
import CardList from '../../components/CardLists/CardLists'
import {CardStyleEnum} from '../../components/CardLists/CardLists'
import Bag from '../../components/Bag/Bag'
import Modal from '../../components/Modal/Modal'
import { IAddress } from '../../types/address/address'
import { getAddressToBase } from '../../fetching/addressToBase'
import {useAuth} from '../../нooks/useAuth'
import Check from '../../components/Check/Check'

const Checkout:FC = () => {

    const {Auth,email} =useAuth()
    const {items,quantity,totalAmount} = useTypedSelector(state=>state.bagItems)
    const [arrayItems , setArrayItems] = useState(Object.values(items))
    const [showModal, setShowModal] = useState(false)
    const [address, setAddress ]= useState<IAddress>({city:null,
                                                      country:null,
                                                      name:null,
                                                      phone:null,
                                                      street:null,      
                                                     })

    useEffect(()=>{
      setArrayItems(Object.values(items))
      
    },[items])

    useEffect(()=>{
      const getAddress =async()=>{
        const data = await getAddressToBase(Auth, email)
        setAddress( {...data} )
      }
      getAddress()
    },[])
    

  return (
  <div className={ classes.page}>

    {showModal&& <Modal closeModal={setShowModal} setAddress={setAddress} /> }
    
    <div className={ classes.wrapper }>
        <div className={ classes.address }>
            <div>
                  <div className={ classes.title}>
                  Shipping Address
                  </div>
                  <div className={ classes.info}>
                    <div>
                        <div> Your Name : {address.name}</div>
                        <div> Country : {address.country}</div>
                        <div> City : {address.city}</div>
                    </div>
                    <div>
                        <div> Street Name : {address.street}</div>
                        <div> Phone Number : {address.phone}</div>
                        

                    </div>
                  </div>
            </div>
            <div>
                  <button onClick={()=>setShowModal(true)} className={ classes.button}> Change</button>
            </div>
        </div>
        {/*<div className={ classes.payment}>
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
        </div>*/
        }
        <div className={ classes.bag}>
            <div className={ classes.title}>Review you Bag  </div>
            <div className={ classes.bag_items}>
            <CardList   style={CardStyleEnum.center}  
                        items={arrayItems} 
                        renderItem={(item:ItemsType)=> <>
                                <LongCard item={item} />
                                <div className={ classes.item}>
                                    <hr className={ classes.line}/>
                                </div> </>} />
               
            </div>
        </div>
    </div>
    <div>
           <Check address={address}/>
    </div>
  </div>

  )
}

export default Checkout