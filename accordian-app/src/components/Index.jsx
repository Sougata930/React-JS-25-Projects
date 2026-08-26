import React, { useState } from 'react'
import "./styles.css"

import accordionData from '../assets/data.js'
import { Item } from './Item/Item.jsx'


export const Index = () => {
  const [clicked , setClicked]=useState(0);
  const [selected , setSelected] = useState(null);
  

  return (
    <div className="container">
      <button onClick={()=> setClicked(clicked=> 1-clicked)} className='enable'>
        Enable Multiselect
      </button>
      <div className="items">
        { accordionData.map((item , i)=>{
          return <Item click= {clicked} question={item.question} answer={item.answer} id={item.id} selected={selected} setSelected={setSelected}/>

        })}

      </div>
    </div>
  )
}
