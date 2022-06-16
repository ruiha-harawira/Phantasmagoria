import React, {useState} from 'react';

function RuPixel () {

  const randomColor = `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

  const [style, setStyle] = useState ({
    height: '20px',
    width: '20px',
    backgroundColour: randomColor
  
  })

  const clickHandler = evt => {
    evt.preventDefault()
    setStyle({
      height: '20px',
      width: '20px',
      backgroundColor: randomColor
    })
  }

  const hoverHandler = evt => {
    evt.preventDefault() 
    setStyle({
      height: '20px',
      width: '20px',
      backgroundColour: '#00000000'

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

