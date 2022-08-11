import React, {FC} from 'react'
import Bag from '../../components/Bag/Bag'
import Card from '../../components/Card/Card'
import CardLists from '../../components/CardLists/CardLists'
import SearchPanel from '../../components/SearchPanel/SearchPanel'
import classes from "./HomePage.module.scss"



const HomePage: FC = () => {

  const items =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
  return (
    <div className= {classes.wrapper}>
        <div className={classes.center}>
        <SearchPanel/>
        <CardLists  items={items} renderItem={(item:number) =><Card/>} />
        </div>
       
    </div>
  )
}

export default HomePage