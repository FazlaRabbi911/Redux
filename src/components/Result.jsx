import React from 'react'
import { useSelector } from 'react-redux'

const Result = () => {
    let data = useSelector((state)=> state.onee.value)
  return (
    <div className='ddddd'>
        <h2 >
            {data}
        </h2>
    </div>
  )
}

export default Result