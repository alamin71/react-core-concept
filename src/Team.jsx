import { useState } from "react"

export default function Team(){
    const [Team, setTeam]=useState(11)
    const handleAdd = ()=>{
        const newTeam = Team + 1;
        setTeam(newTeam)

    }
    const handlRemove = ()=>{
        const newTeam = Team - 1;
        setTeam(newTeam)
    }

    return(
        <div style={{border: '2px solid green', padding:'20px', margin:'20px',borderRadius:'5px'}}>
            <h3>Player's : {Team} </h3>
            <button onClick={handleAdd}>add</button>
            <button onClick={handlRemove}>remove</button>
        </div>
    )
}