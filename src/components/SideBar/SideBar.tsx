import React , {FC, useState ,useEffect} from 'react';
import classes from "./SideBar.module.scss"
import { getDatabase, ref, onValue,  child, get} from "firebase/database";
import { initializeApp } from "firebase/app";
import {ItemsType} from '../../types/product/ItemsType'
import useActions from '../../нooks/useActions';
import { EProducts, ESelectedProductType } from '../../types/selectedProducts/selectedProducts';

const SideBar : FC = () => {

  const {DeleteProductsHomePage} = useActions()

const [clicked , setClicked] = useState <any>({
                                          [EProducts.NOTEBOOKS]:false ,
                                          [EProducts.SMARTPHONES]: false ,
                                          [EProducts.SMART_TV]: false ,
                                          [EProducts.SMART_WATCHES]: false ,
                                        })

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
              setClicked({...clicked , [key] : true });
             
            } else {
              console.log("No data available");
            }
          }).catch((error) => {
            console.error(error);
          });

        }

  const deleteItem =(key: string)=>{
    DeleteProductsHomePage(key)
    setClicked({...clicked , [key] : false });
  }

  useEffect(()=>{
          fetchItems(EProducts.SMART_WATCHES)
      },[])

 
  
  const {AddProductsHomePage}=useActions()

      const ClickCheck =(key: string, addItem:any , deleteItem:any)=>{

      clicked[key] ?
            deleteItem(key)
            :
            addItem(key)
      }

console.log(clicked)

  return (
    <div className={ classes.wrapper}>
      
      <i onClick={ ()=>setShowProducts(!showProducts)}className={classes.icon + " fa fa-bars"} aria-hidden="true"></i>
      
      {showProducts && <div className={classes.products}>
          <div onClick={()=> ClickCheck(EProducts.SMART_TV,fetchItems,deleteItem)}  className={classes.item}>
            <i className={classes.icon_box + " fa-solid fa-tv"}></i>
          </div>
          <div onClick={()=> ClickCheck(EProducts.SMART_WATCHES,fetchItems,deleteItem)} className={classes.item}>
            <i className={classes.icon_box + " fa-regular fa-clock"}></i>
          </div>
          <div onClick={()=> ClickCheck(EProducts.SMARTPHONES,fetchItems,deleteItem)} className={classes.item}>
          <i className={classes.icon_box + " fa-solid fa-mobile-screen-button"}></i>
          </div>
          <div onClick={()=> ClickCheck(EProducts.NOTEBOOKS, fetchItems,deleteItem)} className={classes.item}>
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