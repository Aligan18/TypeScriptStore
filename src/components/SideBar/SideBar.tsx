import React , {FC, useState ,useEffect} from 'react';
import classes from "./SideBar.module.scss"
import { getDatabase, ref, onValue,  child, get} from "firebase/database";
import { initializeApp } from "firebase/app";
import {ItemsType} from '../../types/product/ItemsType'
import useActions from '../../нooks/useActions';
import { EProducts, ESelectedProductType } from '../../types/selectedProducts/selectedProducts';

const SideBar : FC = () => {

const [showProducts , setShowProducts ] = useState(false)
      // const [items , setItems] =useState<ItemsType[] >([])
        const   fetchItems = (key: string) =>{
          
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
          get(child(dbRef, key)).then((snapshot) => {
            if (snapshot.exists()) {
              console.log(snapshot.val());
              const data  = snapshot.val();
              AddProductsHomePage(data.items , key )
             
            } else {
              console.log("No data available");
            }
          }).catch((error) => {
            console.error(error);
          });

        }

  useEffect(()=>{
          fetchItems(EProducts.SMART_WATCHES)
      },[])

 
  
  const {AddProductsHomePage}=useActions()




  return (
    <div className={ classes.wrapper}>
      
      <i onClick={ ()=>setShowProducts(!showProducts)}className={classes.icon + " fa fa-bars"} aria-hidden="true"></i>
      
      {showProducts && <div className={classes.products}>
          <div onClick={()=> fetchItems(EProducts.SMART_TV)}  className={classes.item}>
            <i className={classes.icon_box + " fa-solid fa-tv"}></i>
          </div>
          <div onClick={()=> fetchItems(EProducts.SMART_WATCHES)} className={classes.item}>
            <i className={classes.icon_box + " fa-regular fa-clock"}></i>
          </div>
          <div onClick={()=> fetchItems(EProducts.SMARTPHONES)} className={classes.item}>
          <i className={classes.icon_box + " fa-solid fa-mobile-screen-button"}></i>
          </div>
          <div onClick={()=> fetchItems(EProducts.NOTEBOOKS)} className={classes.item}>
          <i className={classes.icon_box + " fa-solid fa-laptop"}></i>
          </div>
      </div>
      }
      <i className={classes.icon + " fa-solid fa-store"}></i> 
      <i className={classes.icon + " fa fa-shopping-bag"} aria-hidden="true"></i>
       </div>
  )
}

export default SideBar