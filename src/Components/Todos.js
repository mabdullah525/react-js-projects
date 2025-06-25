import React from 'react'

const Todos = () => {
    return (
        <>
            <div className='todos'>
                <div className='todo-input'>
                    <input type="text" placeholder='Enter Your Task' />
                    <button>Add Todo</button>
                </div>
            </div>
        </>
    )
}

export default Todos