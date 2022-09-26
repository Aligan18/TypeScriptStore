import React ,{FC} from 'react'
import classes from './Modal.module.scss'

import Forms from '../Forms/Forms'

interface IModal {
  closeModal: (flag: boolean) => void

}

const Modal : FC <IModal> = ({closeModal}) => {
  return (<>
   
    <div  className={classes.wrapper}>
        <div className={classes.center}>

            <Forms closeModal={closeModal}/>
        </div>
    </div>
    </> )
}

export default Modal