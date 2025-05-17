import {useEffect, useState} from "react";
// import '../useEffects/index.css';
import './index.css'; 

export const ReactUseEffect = ()=>{
    //  Example 1:
    // const [count,setCount] =useState(0);
    // useEffect(() => {
    //     console.log("Count Value", count);
        
    // },[count ])    

    //  Example 2:
    
    const [date,setDate]= useState(0);
    useEffect(()=>{
        setInterval(()=>{
        const updateDate= new Date();
        setDate(updateDate.toLocaleTimeString())
        })
    },[])

    return(
        <div className="container effect-container">
            {/* Example 1:  */}
            {/* <h1>useEffect Hook</h1> 
            <p>Count: {count}</p>
            <button onClick={()=> setCount(count +1)}> increment</button> */}

             {/* Example 1:  */}
            <h1>Date using useEffect </h1> 
            <p>Date: {date}</p>
        </div>
    );
};