import React,{FC} from 'react'
import classes from './BackButton.module.scss'
import { Link } from 'react-router-dom'
import { RoutersPathEnum } from '../../router/router'

interface IBackButton{
    onClick?: (event: MouseEvent) => void
}
const BackButton: FC<IBackButton>= () => {
  return (
    <div className={classes.back_button}>
    <button >
    <Link  className={classes.link} to={RoutersPathEnum.HOME}>
             Back
      </Link>
       </button>
  </div>
  )
}

export default BackButton