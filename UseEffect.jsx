import { useState } from "react";


function UseEffect() {
    const [count,setCount]=useState(0);
  return (
    <>
    <div>
        <h1>Count:{count}</h1>
       <button onClick={()=>setCount((value)=>value-1)}>-</button>
        <button onClick={()=>setCount((value)=>value+1)}>+</button>
    </div>
    </>
  )
  
}

export default UseEffect;