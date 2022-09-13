import React , {FC, useState} from 'react'
import classes from './LongCard.module.scss'
import ImageCard from '../ImageCard/ImageCard'
import InfoCard , { ESizeTypes }from '../InfoCard/InfoCard'
import { ItemsType } from '../../types/product/ItemsType'
import Counter from '../Counter/Counter'
import useActions from '../../нooks/useActions'
import {useTypedSelector} from '../../нooks/useTypeSelector'

interface ILongCard {
  item? : ItemsType 
} 


const LongCard: FC<ILongCard>= ({item}) => {
 const {items} = useTypedSelector(state => state.bagItems)
  const {deleteBagItem} = useActions()
  const ClickOnCross =()=>{
    item&& deleteBagItem(item)
  }
  return (<>
   {item&& items[item?.id]&& <div className={classes.card}> 
                    <div className={classes.img_box}> 
                        <ImageCard item={item} img_url={item?.primaryImage.medium}/>
                    </div>
                    <div className={classes.info_box}> 
                        <InfoCard bagButton={false} info={item} stars={item?.rating} size={ESizeTypes.small}/>
                    </div>
                    <div className={classes.counters_box}> {item&& <Counter item={item}/>} </div>
                    <div onClick={()=>ClickOnCross() } className={classes.counters_box}> <i className="fa-solid fa-xmark"></i> </div>
                </div>}
  </>)
}

export default LongCard