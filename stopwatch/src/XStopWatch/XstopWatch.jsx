import React, { useEffect,useRef,useState } from 'react';


const XstopWatch = () => {
  const [timer, setTimer] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  const timerId = useRef(null);
  useEffect(()=>{
      
      timerId.current = setInterval(() => {
          if(isRunning){
            setTimer(timer=> timer+1);
          }
      }, 1000);
      
      return ()=> clearInterval(timerId.current)
  }, [isRunning])

  const reset = ()=>{
    setIsRunning(false);
    setTimer(0)
  }

  const formatTime  = seconds=>{
      let min = Math.floor(seconds/60);
      let remaniningSecs  = seconds % 60;

      if(!seconds) {
          min = 0;
          remaniningSecs = 0;
      }
      
      let sec = remaniningSecs > 9 ? remaniningSecs : `0${remaniningSecs}`;
      return `${min}:${sec}`
  }
  return (
      <div>
          <h1>Stopwatch</h1>
          <p>Time: {formatTime (timer)}</p>
          <button onClick={()=> setIsRunning(prev=> !prev)}>{isRunning ? "Stop" : "Start"}</button>
          <button onClick={reset}>Reset</button>
      </div>
  );
};


export default XstopWatch;