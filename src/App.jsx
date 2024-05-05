import './App.css'
import Countary from './Countary'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'
import Friend from "./Friend.1"
function App() {
  function handleclik(){
    alert('button clikd')
  }
  const handleclik2 = () =>{
    alert('button2 cliked')
  }
  const addFive =(num) =>{
    alert(num + 5)

  }
  
  return (
    <>
      <h2>React Core Concept</h2>
      <Users></Users>
      <Team></Team>
      <Countary></Countary>
      <Friends></Friends>
         <button onClick={handleclik}>click me</button>
      <button onClick={handleclik2}>click2</button>
      <button onClick={()=>addFive(6)}>click3</button>
      
    </>
  )
}

export default App
