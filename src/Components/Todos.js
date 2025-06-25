import React, { useState } from 'react'
import '../Css/Todos.css'

const Todos = () => {
    const [input, setInput] = useState();
    const [data, setData] = useState([]);

    const getInput = (e) => {
        setInput(e.target.value);
    }
    const getData = () => {
        let store = [...data]
        setData(input)
    }
    return (
        <>
            <div className='todos'>
                <div className='todo-input'>
                    <input type="text" placeholder='Enter Your Task' onChange={getInput} />
                    <button onClick={getData}>Add Task</button>
                </div>
                {data}
            </div>

        </>
    )
}

export default Todos