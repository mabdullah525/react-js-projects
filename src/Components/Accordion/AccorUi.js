import React, { useState } from 'react'
import '../../Css/Accor.css';




const AccorUi = ({ curElem }) => {
  const [data, setData] =useState(false);
  const showHide = () => {
    setData(!data);
  }
  return (
    <>
      <div className='accordion'>
        <div className='qns'>
          <div className='qns-header'>
            <h3>{curElem.title}</h3>
            <button onClick={showHide}>
              {data ? <i className="fa-solid fa-minus"></i> : <i class="fa-solid fa-plus"></i>}
            </button>
          </div>
          <p>{data ? curElem.content : ""}</p>
        </div>
      </div>

    </>
  )
}

export default AccorUi