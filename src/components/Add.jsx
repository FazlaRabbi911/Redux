// import React, { useEffect, useState } from 'react'

// import {  useSelector,useDispatch } from 'react-redux'
// import   { datastore }  from '../slice'

// const Add = () => {
//     let [pluse,setpluse] = useState("")
//     let data = useSelector((state)=> state.onee.value)
//     let dispatch = useDispatch()

//     useEffect(()=>{
//         setpluse(data)
//     },[])
//     function handleclick(){
//         // setpluse(pluse + 1)
//         console.log(setpluse(pluse + 1))
//     }
//     console.log(pluse)
//   return (
//     <button onClick={handleclick}>pluse+</button>
//   )
// }
// export default Add