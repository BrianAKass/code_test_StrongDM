import React, {useEffect, useState} from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {

  const [time, setTime] = useState(0)
  const [clicked, setClicked] = useState(false)
  
  
  const handleChange = () =>{
    if(time > 0){
      setTime(time - 1000)
    }else{
      setClicked(false)
    }
  } 

  const handleClick = () => {
    setClicked(true)
    setTime(time+3000)
  };

// 1. When you click the link it displays a message on the page (not a popup alert) that the link has been clicked.
// 2. Automatically dismiss the message after 3 seconds.
// 3. Clicking the link again extends the deadline another 3 seconds
// 4. The message shows a countdown of how much time remains until it is dismissed

useEffect(
  () => {
    const countdown = setInterval(handleChange, 1000);
    return ()=>{
      clearInterval(countdown)
    }
  },
  [clicked, handleChange],
);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {clicked && <p>
          Your time is almost up. Hurry! Click the button! <br />
          <em>Scroll down if you can't see the instructions.</em><br />
          {time/1000}
        </p>}
        {/* eslint-disable-next-line */}
        <a className="App-link" onClick={handleClick}>
          Press Here
        </a>
      </header>
      <section>
        <h2>The Exercise</h2>
        <h3>Change the code so that it does the following:</h3>
        <ol>
          <li>
            When you click the link it displays a message on the page (not a
            popup alert) that the link has been clicked.
          </li>
          <li>Automatically dismiss the message after 3 seconds.</li>
          <li>
            Clicking the link again extends the deadline another 3 seconds
          </li>
          <li>
            The message shows a countdown of how much time remains until it is
            dismissed
          </li>
        </ol>
      </section>
    </div>
  );
};

export default App;
