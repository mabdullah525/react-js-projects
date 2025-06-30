import React, { useState } from 'react'
import '../Css/Todos.css'

const Todos = () => {
    const [input, setInput] = useState();
    const [data, setData] = useState([]);

    const getInput = (e) => {
        setInput(e.target.value);
    }
    const getData = () => {
        let store = [...data, input];
        setData(store);
        setInput('');
    }
    const deleteTask = (e) => {
        const taskToDelete = e.target.previousSibling.innerText;
        const updatedData = data.filter(task => task !== taskToDelete);
        setData(updatedData);
    }
    return (
        <>
            <div className='todos'>
                <div className='todo-input'>
                    <input type="text" placeholder='Enter Your Task' onChange={getInput} value={input} />
                    <button onClick={getData}>Add Task</button>
                </div>
                {data.map((curVal, index) => {
                    return (
                        <>
                            <div className='taskData'>
                                <p>{curVal}</p>
                                <i id='delIcon' onClick={deleteTask} class="fa-solid fa-trash"></i>

                            </div>
                        </>
                    )


                })}
            </div>

        </>
    )
}

export default Todos