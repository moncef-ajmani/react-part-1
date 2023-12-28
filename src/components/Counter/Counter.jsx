import './style.css'
import { useState } from 'react'
export default function Counter(){
    const [count,setCount] = useState(0)
    
    function handleClick(){
        setCount(count+1)
    }

    return (
        <>
            <h1 className='counter-color'>Counter: {count}</h1>
            <button onClick={handleClick}>Imcrement Me!!</button>
        </>
        
    )
}