import React from 'react'
import CassiePixel from './CassiePixel'

const Cassie = () => {

  const pixelArray = Array.from({ length: 280 }, () => <Cassie />)
  

  
  return (
    <div className='cassieContainer'>{pixelArray.map((pixel, i) => <CassiePixel key={i} />)}</div>
 )
}

export default Cassie




