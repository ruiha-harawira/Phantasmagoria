import React from 'react'
import CassiePixel from './CassiePixel'
import ReactAudioPlayer from 'react-audio-player'

const Cassie = () => {

  const pixelArray = Array.from({ length: 280 }, () => <Cassie />)
  
  const refresh = () => {
  window.location.reload(false)
  }
  
  // const [style, setStyle] = useState({
  //   display: "initial"
  // })

  // const clickHandler = evt => {
  //   setStyle(
  //     .pixels {
  //     display: "none"
  //   })
  // }
  
  return (
    <>
      <div className='audio'>
        <ReactAudioPlayer
        src='/ocean.mp3'  
        autoPlay
        // controls
        />
      </div>
      <div className='cassieContainer'>  
        
          {pixelArray.map((pixel, i) => <CassiePixel key={i} />)}
      
      </div>
      <div className='Refresh'>
      <button className='button' onClick={refresh}>Click to reload!</button>
      </div>
      
    </>
 )
}

export default Cassie




