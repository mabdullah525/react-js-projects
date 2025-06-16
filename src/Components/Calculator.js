import React, { useState } from 'react'
import '../Css/Calculator.css';



const Calculator = () => {
    const [result, setResult] = useState("");

    const getValue = (event) => {
        setResult(result.concat(event.target.value));

    }
    const calculation = () => {
        setResult(eval(result).toString());

    }
    const del = () => {
        setResult(result.slice(0, -1));
    }
    const ac = () => {
        setResult("");
    }

    return (
        <>
            
            <div className='calculator'>
                <div className='zero'>
                    <input placeholder="0" value={result} />
                </div>
                <button className='key-btn' onClick={getValue} value="(">(</button>
                <button onClick={getValue} value=")">)</button>
                <button onClick={getValue} value="%">%</button>
                <button onClick={ac} value={"AC"}>AC</button>

                <button onClick={getValue} value="7">7</button>
                <button onClick={getValue} value="8">8</button>
                <button onClick={getValue} value="9">9</button>
                <button onClick={getValue} value="*">*</button>

                <button onClick={getValue} value="1">1</button>
                <button onClick={getValue} value="2">2</button>
                <button onClick={getValue} value="3">3</button>
                <button onClick={getValue} value="+">+</button>

                <button onClick={getValue} value="0">0</button>
                <button onClick={del} value={"Del"}>Del</button>
                <button onClick={calculation} value={"="}>=</button>
                <button onClick={getValue} value="/">/</button>
            </div>



        </>

    )
}

export default Calculator