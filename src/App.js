import React, { useState, useEffect } from "react";

function App() {

  const [count, setCount]=useState(0)
  const [text, setText]=useState("")

  useEffect(() => {
    console.log("useEffect called");
  });

  console.log("Component rendering")
  console.log({text})

  return (
    <div>
      <button onClick={e=>setCount((count)=> count+1)}>I've been clicked {count} times</button>
      <input
      type="text"
      placeholder="type away"
      value={text}
      onChange={e=>setText(e.target.value)}
      >
      
      </input>
    </div>
  )
}

export default App;
