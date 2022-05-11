import React, { useState } from "react";
import './App.css';

function App() {
  const[toDo, setToDO] = useState("");
  const onChange = (event) => setToDO(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(toDo);
  };
  return (  
    <div>
      <form onSubmit={onSubmit}>
        <input 
          onChange={onChange}
          value={toDo}
          type="test" 
          placeholder="Write your to"/>
        <button>전송</button>
      </form>
    </div>);
}

export default App;
