import React, { useState } from 'react'

const CassiePixel = () => {

  const colors=["#FFB6AD", "#F68B69","#FACf63", "#CED75C", "#D2EfDB", "#E3DFD6", "#CCC1DB", "#FFF2EC", "#00919C","#1A86A8", "#AEC6CC", "#FFEF6C", "#985396"];

  const [style, setStyle] = useState({
    height: '50px',
    width: '50px',
    backgroundColor:  colors[Math.floor(Math.random() * colors.length)]
  })

  const hoverHandler = evt => {
    setStyle({
      height: '50px',
      width: '50px',
      backgroundColor: 'white'
    })
  }

  const hoverStopper = evt => {
    setStyle({
      height: '50px',
      width: '50px',
      backgroundColor: colors[Math.floor(Math.random() * colors.length)]
    })
  }

  const handleDragEnter = evt => {
    setStyle({
      height: '50px',
      width: '50px',
      backgroundColor: 'transparent'
    })
  }

  


  return (
    <div style={style}
    onMouseEnter={hoverHandler}
      onFocus={hoverHandler}
      onMouseLeave={hoverStopper}
      onBlur={hoverStopper}
      draggable={true}
      onDragEnter={handleDragEnter}>
      
   </div>
 )
}

export default CassiePixel