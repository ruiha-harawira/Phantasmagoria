import React from 'react'
import { Link } from 'react-router-dom'



function Nav () {
  return (
    <div className='Nav'>
    <ul>
      <Link to='/'><li> Home </li></Link>
      <Link to='/Cam'><li> Cam </li></Link> 
      <Link to='/Cassie'><li> Cassie</li></Link>
      <Link to='/Ru'><li> Ru </li></Link> 
    </ul>
</div>
  )
}

export default Nav 