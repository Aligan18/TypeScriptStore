import React , {FC} from 'react'
import mainLogo from'../../source/1.png';
import classes from './ImageCard.module.scss'

const ImageCard:FC = () => {
  return (
    <div className={ classes.wrapper}>
            <img className={classes.img} src={  "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hd2/ha2/46679839440926/apple-macbook-pro-2020-13-3-myda2-serebristyj-100797673-1-Container.jpg"} ></img>
    </div>
  )
}

export default ImageCard