import React from 'react'  // React, {useState}

function Hooks() {
  const [count, setCount] = React.useState(2)
  const handleIncrement = () => {
    setCount(count + 3)
  }

  return (
    <div>
       <h1>{count}</h1>
       <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default Hooks