import { useEffect, useState } from 'react'


const Counter = () => {
    const [count,setCount]=useState(0);
    const [count1,setCount1]=useState(0);
    function handleIncrease(){
        setCount(count+1)
    }
    function handleDecrease(){
        setCount(count-1)
    }
    useEffect(()=>{
        setCount1(count*5)
    })

  return (
    <div>Counter:{count}
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
        <h1>New Counter :{count1}</h1>
    </div>
  )
}

export default Counter