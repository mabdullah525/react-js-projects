import React from 'react'
import '../../Css/Accor.css';




const AccorUi = ({ curElem }) => {
  return (
    <>
      <div className='accordion'>
        <div className='qns'>
          <button>
            +
          </button>
          <h3>{curElem.title}</h3>
          <p>{curElem.content}</p>

        </div>

      </div>
    </>
  )
}

export default AccorUi