import React from 'react'

function Child(props) {
  const childData = "Data from child component"
  props.onChildData(childData);
  
  return (
    <div>
      <p>I am the child component</p>
      <p>{props.data}</p>
    </div>
  )
}

export default Child;

