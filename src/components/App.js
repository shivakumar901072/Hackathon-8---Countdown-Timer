import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';

const App = () => {
  // write your code here 
 
  const [count, setCount] = useState();
  const [seconds, setSeconds ] =  useState(0);
  useEffect(()=>{
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                
                clearInterval(myInterval)
            }  
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    });
  
  function enterClicked(e)
    {
        if(e.keyCode ===13)
        {
            
            const sec = document.getElementById("timeCount").value;
            const roundSec = Math.trunc(sec);
            if (isNaN(sec) || sec < 1) {
              setSeconds(0);
            } else {
            setSeconds(roundSec);
            setCount();
            }
        }
    }

  // function inputHandler(e){
  //     setCount(e.targer.value);
  // }

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for<input id="timeCount" onKeyDown={enterClicked} 
          
          /> sec.
        </h1>
      </div>
      <div id="current-time">{seconds}</div>
    </div>
  )
}


export default App;