import React, { useState } from 'react'
import '../Css/Stopwatch.css';

const Stopwatch = () => {
    const [time, setTime] = useState({ hr: 0, min: 0, sec: 0, ms: 0 });
    const [status, setStatus] = useState();
    let updHr = time.hr;
    let updMin = time.min;
    let updSec = time.sec;
    let updMs = time.ms;
    const start = () => {
        myFun();
        setStatus(setInterval(myFun, 10))

    }
    const stop = () => {
        clearInterval(status);
    }
    const reset = () => {
        clearInterval(status);
        setTime({ hr: 0, min: 0, sec: 0, ms: 0 });
    }
    const myFun = () => {
        if (updMs === 100) {
            updMs = 0;
            updSec++;
        }
        if (updSec === 60) {
            updSec = 0;
            updMin++;
        }
        if (updMin === 60) {
            updMin = 0;
            updHr++;
        }
        updMs++;
        return setTime({ hr: updHr, min: updMin, sec: updSec, ms: updMs });

    }


    return (
        <>
            <div className='watch'>
                <h1>{time.hr + ": " + time.min + " : " + time.sec + " : " + time.ms}</h1>
                <div className='buttons'>
                    <button className='start' onClick={start}>Start</button>
                    <button className='stop' onClick={stop}>Stop</button>
                    <button className='reset' onClick={reset}>Reset</button>
                </div>

            </div>
        </>

    )
}

export default Stopwatch