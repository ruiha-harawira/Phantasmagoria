import React, {useState} from 'react';

function Pixel () {

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

  const changeToTransparent = evt => {
    evt.preventDefault() 
    setStyle({
      height: '20px',
      width: '20px',
      backgroundColour: '#00000000'

    })
  }

  

  return (
    <div onClick={setInterval(clickHandler, 10000)} onDragEnter={changeToTransparent} draggable={true} onMouseEnter={makeGreen} style={style}>
    </div>
  )

  
  
}
export default Pixel 

