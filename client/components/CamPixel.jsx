

import React, { useState } from "react";





function CamPixel() {

  const [style, setStyle] = useState({
    height: "30px",
    width: "30px",
    backgroundColor: '#26d840'
  })

  const clickHandler = evt => {
    setStyle({
      height: "30px",
      width: "30px",
      backgroundColor: `green`
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
  const crazy = evt => {
    setStyle({
      height: "100px",
      width: "100px",
      backgroundColor: 'green',
      
    })
  }


  return (
    <div onClick={clickHandler} onMouseEnter={makeGreen} style={style} onDoubleClick={crazy}>
    </div>
  )

}

export default CamPixel