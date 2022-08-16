import React ,{FC} from 'react'

import ImageCard from '../ImageCard/ImageCard';
import InfoCard, { ESizeTypes } from '../InfoCard/InfoCard';
import classes from './Card.module.scss'
import {ItemsType} from '../../types/product/ItemsType'
import {Link} from 'react-router-dom'
import useActions from '../../нooks/useActions';

interface CardProps{
  item: ItemsType 
}



const Card:FC<CardProps> = ({item}) => {

  const {GetProductInfo} = useActions()

  const goToProductInfo =()=>{
      GetProductInfo(item)
  }


  return ( 
    
    <div className={classes.card}>
      <Link onClick={()=>goToProductInfo()} className={classes.link} to={"/info"}>
        <div className={classes.wrapper} >
          <ImageCard img_url={item.primaryImage.medium}/>
        </div>
      </Link>

        <div className={classes.bottom}>
         
           <InfoCard  info={item} size={ESizeTypes.small} stars={item.rating}/>
          
        </div>
    </div>
    
   
  
    
  )
}

export default Card