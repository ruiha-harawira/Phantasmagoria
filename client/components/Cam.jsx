import React from 'react'
import CamPixel from './CamPixel'

function Cam() {
  return (
    <div>  
      
      <h1>Cam's Route 2</h1>

<div className='mainTable'>
<div className='table'>

{ Array.from({ length: 930 },() => (<CamPixel />))}


</div>
</div>
</div>

  

  )
}



export default Cam