import React ,{FC} from 'react'
import classes from './Modal.module.scss'

import Forms from '../Forms/Forms'
import { IAddress } from '../../types/address/address'

interface IModal <T> {
  renderItem: () => React.ReactNode;
}

export default  function  Modal<T>(props:IModal<T>)  {
  return <div  className={classes.wrapper}>
        <div className={classes.center}>

           {props.renderItem()}
        </div>
    </div>
     
}

