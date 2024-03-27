import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Minus, Multiply, datastore, pluse,devide } from '../slice'


const Push = () => {
    let [number,setnumber] = useState("")

    let dispatch = useDispatch()
    let handlechange =(e)=>{
        setnumber(e.target.value)
    }
    let handleClick=()=>{
        dispatch(datastore(number))
    }
    let handlepluse =()=>{
        dispatch(pluse())
    }
    let handleminus=()=>{
        dispatch(Minus())
    }
    let multyplay =()=>{
        dispatch(Multiply())
    }
    let gggg =()=>{
        dispatch(devide())
    }
  return (
    <div className='nnnm'>
        <input type="text" onChange={handlechange}/>
        <button className='pushh' onClick={()=>handleClick()}>push</button>
        <button onClick={handlepluse}>Pluse</button>
        <button onClick={handleminus}>Minus</button>
        <button onClick={multyplay}> Multiply</button>
        <button onClick={gggg}> Devide</button>
    </div>
  )
}

export default Push