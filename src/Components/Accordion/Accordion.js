import React from 'react'
import { data } from "../Accordion/AccorData"
import AccorUi from './AccorUi'



const Accordion = () => {
  
  return (
    <>
    {
      data.map((curElem, index)=>{
        return <AccorUi curElem={curElem}/>
        
      })

    }
    </>
  )
}

export default Accordion