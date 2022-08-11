import React , {FC} from 'react'
import ImageCard from '../../components/ImageCard/ImageCard'
import InfoCard, { ESizeTypes } from '../../components/InfoCard/InfoCard'
import LongCard from '../../components/LongCard/LongCard'
import classes from './BagPage.module.scss'
const BagPage: FC= () => {
  return (
    <div className={classes.wrapper}>
        <div className={classes.title}> Check your Bag items</div>
            <LongCard/>
            <LongCard/>
            <LongCard/>
            <LongCard/>
                      
    </div>
  )
}

export default BagPage