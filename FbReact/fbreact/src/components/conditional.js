import React from "react";
import Funccomponent from "./funccomponent";
import Header from "./header";
import Events from "./events";
function Conditional(props) {
  let loggedIn = false;
  let chats = 10;
  let message;
  if (loggedIn) {
    message = <h1>Welcome user</h1>;
  } else {
    message = <h1>Welcome guest</h1>;
  }
  
  return (
    <div>
      {message}

      {chats === 0 && <h4>You have no new chats</h4>}

      <Events  name={props.name} age={props.age}/>
    </div>
  );
}

export default Conditional;
