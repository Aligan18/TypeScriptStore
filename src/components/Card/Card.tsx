import React ,{FC} from 'react'
import mainLogo from'../../source/1.png';
import ImageCard from '../ImageCard/ImageCard';
import InfoCard, { ESizeTypes } from '../InfoCard/InfoCard';
import classes from './Card.module.scss'
import ItemsType from '../../types/product/ItemsType'

interface CardProps{
  item: ItemsType 
}

const Card:FC<CardProps> = ({item}) => {
  return ( 
    <div className={classes.card}>
        <div className={classes.wrapper}>
          <ImageCard img_url={item.primaryImage.medium}/>
        </div>

        <div className={classes.bottom}>
           <InfoCard  info={item} size={ESizeTypes.small} stars={item.rating}/>
        </div>
    </div>
   
  
    
  )
}

export default Card