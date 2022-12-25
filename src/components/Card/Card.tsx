import React ,{FC, useState} from 'react'

import ImageCard from '../ImageCard/ImageCard';
import InfoCard, { ESizeTypes } from '../InfoCard/InfoCard';
import classes from './Card.module.scss'
import {ItemsType} from '../../types/product/ItemsType'
import {Link} from 'react-router-dom'
import useActions from '../../нooks/useActions';
import { RoutersPathEnum } from '../../router/router';

interface CardProps{
  item: ItemsType 
}



const Card:FC<CardProps> = ({item}) => {

  const {GetProductInfo} = useActions()

  const goToProductInfo =()=>{
      GetProductInfo(item)
  }
  const [imageNotEmpty,setImageNotEmpty] = useState(true)

  return ( <>
   { imageNotEmpty &&
     <div className={classes.card}>
        <div>
        <Link onClick={()=>goToProductInfo()} className={classes.link} to={RoutersPathEnum.INFO + item.id}>
          <div className={classes.wrapper} >
            <ImageCard setImageNotEmpty={setImageNotEmpty}  item={item} img_url={item.primaryImage.medium}/>
          </div>
        </Link>

          <div className={classes.bottom}>
          
            <InfoCard  info={item} size={ESizeTypes.small} stars={item.rating}/>
            
          </div>
      </div>
    </div>
   }
   </>
  )
}

export default Card