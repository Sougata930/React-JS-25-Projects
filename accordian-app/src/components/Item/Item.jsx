import React, { useState } from 'react'
import "./Item.css"
export const Item = (props) => {

  const [answer , setAnswer] = useState(0);
  



  return (
    <div className='container1'>
      <div className="accordion-item">
          <p>{props.question}</p>
          <button onClick= {props.click === 1 ?()=>setAnswer(answer => (answer+1)%2):()=> props.setSelected(props.selected===props.id?null : props.id) }>+ </button>
          
          
        

          {props.click===1?(answer === 1  ?(
            <div className='box'>
              
              <p className='answer-container'>{props.answer}</p>
            </div>
          ) : null): props.selected===props.id ? (<div className='box'>
              
              <p className='answer-container'>{props.answer}</p>
            </div>) :null }

          


      </div>
      
    </div>

  )
}
