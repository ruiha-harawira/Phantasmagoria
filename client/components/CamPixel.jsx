

import React, { useState } from "react";





function CamPixel() {

  const [style, setStyle] = useState({
    height: "30px",
    width: "30px",
    backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
  })

  const clickHandler = evt => {
    setStyle({
      height: "30px",
      width: "30px",
      backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
    })

  }
  const makeGreen = evt => {
    setStyle({
      height: "30px",
      width: "30px",
      backgroundColor: 'green',
      opacity: 0.01
      
    })




  }
  return (
    <div onClick={clickHandler} onMouseEnter={makeGreen} style={style}>
    </div>
  )

}

export default CamPixel