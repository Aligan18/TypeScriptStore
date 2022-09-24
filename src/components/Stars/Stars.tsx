import React , {FC, useEffect, useState} from 'react'

interface StarsProps {
    count : number;
}

const Stars :FC<StarsProps> = ({count}) => {
const [stars , setStar] = useState<number[]>([])

useEffect(()=>{
    let newStars: number[] = []
    for (let i = 0; i < count; i++){
        newStars.push(Math.round( Math.random() * 100 ));
        
    }
   
    return setStar(state => ([ ...newStars ]));
},[])

    
        
  return (
    <div>
        {stars.map(star=>
           <i className="fa-solid fa-star"></i> )}
        
        </div>
  )
}

export default Stars