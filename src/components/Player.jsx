import { useState, useRef } from "react";

export default function Player() {
  let inputName = useRef();
  const [playerName, changeName] = useState(null);
  function HandleChangeName(){
    changeName(inputName.current.value);
  }
  
  return (
    <section id="player">
      <h2>Welcome {playerName ?? ""}</h2>
      <p>
        <input type="text" ref={inputName}/>
        <button onClick={HandleChangeName}>Set Name</button>
      </p>
    </section>
  );
}
