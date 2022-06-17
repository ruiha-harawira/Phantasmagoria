import React from 'react'
import CamPixel from './CamPixel'

function Cam() {

  function refreshPage() {
    window.location.reload(false);
  }
  

  return (
    <div className='camBackground'>  

<div className='mainTable'>
<div className='table'>
  



{ Array.from({ length: 484 },() => (<CamPixel />))}


</div>
</div >
<div className='Reset'>
<button onClick={refreshPage}>Click to reload!</button>
</div>
</div>

  

  )
}



export default Cam