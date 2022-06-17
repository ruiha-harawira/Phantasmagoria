import React from 'react'
import CassiePixel from './CassiePixel'
import ReactAudioPlayer from 'react-audio-player'

const Cassie = () => {

  const pixelArray = Array.from({ length: 280 }, () => <Cassie />)
  

  
  return (
    <>
      <div className='cassieContainer'>   
        {pixelArray.map((pixel, i) => <CassiePixel key={i} />)}
      </div>
      <div className='audio'>
        <ReactAudioPlayer
        src='/ocean.mp3'  
        autoPlay
        controls
        />
      </div>
    </>
 )
}

export default Cassie




