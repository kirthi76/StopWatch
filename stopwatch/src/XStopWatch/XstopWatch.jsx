import React, { useEffect, useState } from 'react';

const XstopWatch = () => {
    const [timer, setTimer] = useState(0);
    const [isRunning, setIsRunning] = useState(false);


    useEffect(()=>{

        let timerId;
        if(isRunning){
             timerId = setInterval(() => {
            
                setTimer( timer+1);
                
            }, 1000);
        }
       
        
        return ()=> {clearInterval(timerId);
    
    }    }, [isRunning,timer])

      

    const formatTime = secs=>{
        const min = Math.floor(secs/60);
        let remaniningSecs = secs % 60;
        return `${min}:${remaniningSecs<10 ? "0":""} ${remaniningSecs}`
    }

    
  const startStop = () => {
    setIsRunning(!isRunning);
  };

  const reset = () => {
    setTimer(0);
    setIsRunning(false);
  };
    return (
        <div>
            <h1>Stopwatch</h1>
            <p>Time: {formatTime(timer)}</p>
            <button onClick={startStop}>{isRunning ? 'Stop' : 'Start'}</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};

export default XstopWatch;