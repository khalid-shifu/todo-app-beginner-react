import React from 'react'  // React, {useState}

function HookBasedOnPrevState() {
  const [count, setCount] = React.useState(0)
  const handleIncrement = () => {
    setCount((prev) => prev + 1)
    setCount((prev) => prev + 1)
    setCount((prev) => prev + 1)
  }

  return (
    <div>
       <h1>{count}</h1>
       <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default HookBasedOnPrevState