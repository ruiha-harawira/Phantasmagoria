import React, { useState } from 'react'

const Cassie = () => {

  const colors=["#393E41", "#E94F37","#E94F37", "#1C89BF", "#A1D363", "#85FFC7", "#297373", "#FF8552", "#A40E4C","#FFF000"];

  const [style, setStyle] = useState({
    height: '50px',
    width: '50px',
    backgroundColor:  colors[Math.floor(Math.random() * colors.length)]
  })
  return (
    <div style={style}>
      
   </div>
 )
}

export default Cassie




