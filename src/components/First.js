import React from 'react'
import updatedFunction from './Common'
 

function First (props) {
    const {counter,data}=props
  return (
    <div>
        <button onClick={data}>Click me { counter}times</button>
    </div>
  )
}

export default updatedFunction(First)