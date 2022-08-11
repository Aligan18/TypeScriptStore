import React from 'react'
import classes from './LongCard.module.scss'
import ImageCard from '../ImageCard/ImageCard'
import InfoCard , { ESizeTypes }from '../InfoCard/InfoCard'

const LongCard = () => {
  return (
    <div className={classes.card}> 
                    <div className={classes.img_box}> 
                        <ImageCard/>
                    </div>
                    <div className={classes.info_box}> 
                        <InfoCard bagButton={false}  stars={2} size={ESizeTypes.small}/>
                    </div>
                    <div className={classes.counters_box}> </div>
                </div>
  )
}

export default LongCard