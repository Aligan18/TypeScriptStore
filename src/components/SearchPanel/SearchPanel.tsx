import React, {FC, useState} from 'react'
import classes from "./SearchPanel.module.scss"

interface ISearchPanel {
  searchValue: string | undefined
  setSearchValue: (value: string) =>void;
}


const SearchPanel: FC<ISearchPanel> = ({searchValue, setSearchValue}) => {
  let timer:any 

  const ChangeValue=(value:string) =>{
    clearTimeout(timer)
    timer =  setTimeout(()=> setSearchValue(value) , 1000)
  }


  return (
    <div className={ classes.wrapper}>
      <input onChange={(e)=> ChangeValue(e.target.value)} type={"text"} className={ classes.input}  ></input>
    </div>
  )
}

export default SearchPanel