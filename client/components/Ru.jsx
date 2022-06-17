import React from 'react'
import RuPixel from './RuPixel'

function Ru() {
  return (
    <div>
      <div className="bean">
        {Array.from({ length: 342 }, (_, i) => (
          <RuPixel key={i} />
        ))}
      </div>
    </div>
  )
}

export default Ru
