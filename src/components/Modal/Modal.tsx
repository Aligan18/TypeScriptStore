import React ,{FC} from 'react'
import classes from './Modal.module.scss'

import Forms from '../Forms/Forms'
import { IAddress } from '../../types/address/address'

interface IModal {
  closeModal: (flag: boolean) => void
  setAddress:(address:IAddress)=> void
}

const Modal : FC <IModal> = ({closeModal,setAddress}) => {
  return (<>
   
    <div  className={classes.wrapper}>
        <div className={classes.center}>

            <Forms closeModal={closeModal} setAddress={setAddress}/>
        </div>
    </div>
    </> )
}

export default Modal