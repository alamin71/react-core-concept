import { useState } from "react"

export default function Countary(){
    const [count, setCount]= useState(0)
    const handleAdd = () =>{
        const newCount = count + 1;
        setCount(newCount)
    }
    const handleReduce =() =>{
        const newCount = count - 1;
        setCount(newCount)
    }
    return(
        <div style={{border:'4px solid yellow'}}>
            <h2>Counter: {count} </h2>
            <button onClick={handleAdd}>add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}
