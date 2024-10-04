import React,{useState} from 'react'

function Funccomponent(props) {
const [count , setCount]=useState(10)
function increaseCount(){
    setCount(count+3)
}
    return (
        <div>
             <h1>WELCOME USER!</h1>
           <h4>User has {props.loggedIn}</h4>
          <h1>count:{count}</h1>
          <button onClick={increaseCount}>Increment count</button> 
         
        </div>
    )
}

export default Funccomponent
