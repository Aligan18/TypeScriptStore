import React, {FC, useEffect, useState} from 'react'
import { getDatabase, ref, onValue,  child, get} from "firebase/database";
import { initializeApp } from "firebase/app";

import axios from 'axios'
import Bag from '../../components/Bag/Bag'
import Card from '../../components/Card/Card'
import CardLists, { CardStyleEnum } from '../../components/CardLists/CardLists'
import SearchPanel from '../../components/SearchPanel/SearchPanel'
import classes from "./HomePage.module.scss"

import ItemsType from '../../types/product/ItemsType'




const HomePage: FC = () => {

  const [items , setItems] =useState<ItemsType[] >([])

  const   fetchItems = () =>{
   
      // TODO: Replace the following with your app's Firebase project configuration
      // See: https://firebase.google.com/docs/web/learn-more#config-object
      const firebaseConfig = {
        // ...
        // The value of `databaseURL` depends on the location of the database
        databaseURL: "https://react-electronics-store-default-rtdb.europe-west1.firebasedatabase.app",
      };
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
    // Initialize Realtime Database and get a reference to the service
   
      const dbRef = ref(getDatabase(app));
      get(child(dbRef, `smart_watches`)).then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          const data  = snapshot.val();
          setItems(data.items)
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });

  }


  useEffect(()=>{
      fetchItems()
  },[])

  

  return (
    <div className= {classes.wrapper}>
        <div className={classes.center}>
        <SearchPanel/>
        <CardLists  style={CardStyleEnum.center} items={items} renderItem={(item:ItemsType) =><Card item={item} key={item.id}/>} />
        </div>
       
    </div>
  )
}

export default HomePage