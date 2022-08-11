import React ,{FC} from 'react'
import mainLogo from'../../source/1.png';
import ImageCard from '../ImageCard/ImageCard';
import InfoCard, { ESizeTypes } from '../InfoCard/InfoCard';
import classes from './Card.module.scss'

const Card:FC = () => {
  return (
    <div className={classes.card}>
        <div className={classes.wrapper}>
          <ImageCard/>
        </div>

        <div className={classes.bottom}>
           <InfoCard size={ESizeTypes.small} stars={2}/>
        </div>
    </div>

    
  )
}

export default Card