import { useState , useEffect } from "react";


const UseEffectComp = () =>{
    const [val, valSet] = useState(1)
    
    useEffect(() =>{
        const timer = window.setInterval(() =>{
            valSet(v =>  v + 1)
        } , 1000)
        return () => window.clearInterval(timer) //cleanup function which runs after the component renders
    } , [])
    return(
        <>
        <div>
        {val}
        </div>
        </>
    )
}

export default UseEffectComp