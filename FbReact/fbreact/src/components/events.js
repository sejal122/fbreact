import React, { useState } from "react";
import Header from "./header";

function Events(props) {
  // const [message,setMessage]=useState();
  // const [username,setUsername]=useState('')
  const [name, setName] = useState("");
  // const [password,setPassword]=useState('')

  function handleClick() {
    console.log("button clicked -- message from inside the function");
    //setMessage("how are u doing?")
  }
  // function getName(e){
  // setName(e.target.value)
  // }
  return (
    <div>
      <button> click me </button>

      <input
        id="myinput"
        type="text"
        placeholder="enter your name"
        onChange={(event) => setName(event.target.value)}
      ></input>


      <h4>{name} </h4>

      <Header name={props.name} age={props.age}/>
    </div>
  );
}

export default Events;
