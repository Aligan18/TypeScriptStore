import React, {FC} from 'react'
import classes from "./SearchPanel.module.scss"

const SearchPanel: FC = () => {
  return (
    <div className={ classes.wrapper}>
      <input type={"text"} className={ classes.input}></input>
    </div>
  )
}

export default SearchPanel