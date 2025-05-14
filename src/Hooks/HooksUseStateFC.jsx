import React from 'react'
import { useState } from 'react'

const HooksUseStateFC = () => {
  const [number, setNumber] = useState(0)  

  const handleClick = () => {
    setNumber((prev) => prev + 1)
  }

  return (
    <div>
      <h1>Value : {number}</h1>
      <button onClick={handleClick}>increase</button>
    </div>
  )
}
export default HooksUseStateFC
