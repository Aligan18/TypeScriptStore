import React , {FC, useState} from 'react'
import mainLogo from'../../source/1.png';
import useActions from '../../нooks/useActions';
import classes from './ImageCard.module.scss'
import {ItemsType}from '../../types/product/ItemsType'
import {Link} from 'react-router-dom'
import {RoutersPathEnum} from '../../router/router'
import image from '../../source/0.png'


interface ImageCardProps {
   img_url? : string;
   item?:ItemsType 
   setImageNotEmpty? : (item:boolean) => void;
}

const ImageCard:FC <ImageCardProps> = ({img_url, item,setImageNotEmpty}) => {
  const {GetProductInfo } = useActions()
 
  const goToProductInfo =()=>{
    if (item){
      GetProductInfo(item)
    }
  }


  return (
    <Link onClick={()=>goToProductInfo()}  to={RoutersPathEnum.INFO + item?.id} >
        <div  className={ classes.wrapper}>
            <img onError={()=>setImageNotEmpty && setImageNotEmpty(false) }  className={classes.img} src={ img_url } ></img>
        </div>
      </Link>
  )
}

export default ImageCard