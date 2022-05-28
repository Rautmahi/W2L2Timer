import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [timer,setTimer]=useState(10)
 
    useEffect(()=>{
   const id=setInterval(()=>{
       if(timer>=100)
       {
        clearInterval(id)
       }else
       {
        setTimer(timer+1)
       }
          
        },1000)
        return ()=>{
            clearInterval(id)
        };
    },[timer])
    return (   <div>Count Down -: {timer}
     
    </div>
  )
}

export default Timer



 {/* <button onClick={()=>setTimer(()=>timer + 1)}>+</button>
        <button onClick={()=>setTimer(()=>timer - 1)}>-</button> */}