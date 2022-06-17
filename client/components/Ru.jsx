import React from 'react'
import RuPixel from './RuPixel'

function Ru() {

  function refreshPage() {
    window.location.reload(false);
  }



  return (
    <div>
   <div className = "ruBackground">
      <div className="bean">
     

        {Array.from({ length: 342 }, (_, i) => (
          <RuPixel key={i} /> ))}


      </div>
  
    <div className='Reset'>
    <button onClick={refreshPage}>Click to reload!</button>
    </div>
      </div>
    </div>





  )
}

export default Ru
