import { buildQueries } from '@testing-library/react';
import React, {useState} from 'react';

function RuPixel () {

  const randomColor = `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

  const [style, setStyle] = useState ({
    height: '35px',
    width: '35px',
    backgroundColor: 'pink',
  })

  const clickHandler = evt => {
    evt.preventDefault()
    setStyle({
      height: '35px',
      width: '35px',
      backgroundColor: randomColor
    })
  }

  const hoverHandler = evt => {
    evt.preventDefault() 
    setStyle({
      height: '35px',
      width: '35px',
      backgroundColor: '#00000000',

    })
  }



  

  return (
    <div 
    style={style}
    onClick= {clickHandler} 
    onDragEnter={hoverHandler} 
    draggable={true} 
    onMouseEnter={hoverHandler}>

    </div>
  )

  
  
}
export default RuPixel 

