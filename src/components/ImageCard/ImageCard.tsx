import React , {FC} from 'react'
import mainLogo from'../../source/1.png';
import classes from './ImageCard.module.scss'


interface ImageCardProps {
   img_url? : string;
}

const ImageCard:FC <ImageCardProps> = ({img_url}) => {
  


  return (
    
      <div className={ classes.wrapper}>
              <img className={classes.img} src={ img_url } ></img>
      </div>
  )
}

export default ImageCard