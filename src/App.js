import logo from './logo.svg';
import './App.css';
import Timer from './components/Timer';
import { useState } from 'react';
// import Stopwatch from './components/Stopwatch';
function App() {
  const [show,setShow]=useState(true)
  return (
    <div className="App" onClick={()=>setShow(!show)}>
   
      {show ?<Timer/> :"App"}</div> 
  );
}

export default App;
