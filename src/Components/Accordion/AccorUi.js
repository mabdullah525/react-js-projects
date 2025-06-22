import React, { useState } from 'react'
import '../../Css/Accor.css';




const AccorUi = ({ curElem }) => {
  const [data, setData] =useState(curElem);
  return (
    <>
      <div className='accordion'>
        <div className='qns'>
          <div className='qns-header'>
            <h3>{curElem.title}</h3>
            <button>
              {data ? <i className="fa-solid fa-plus"></i> : null}
            </button>
          </div>
          <p>{curElem.content}</p>
        </div>
      </div>

    </>
  )
}

export default AccorUi