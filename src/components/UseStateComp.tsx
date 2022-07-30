import {useState } from 'react'


const UseStateComp = () =>{
    const [arr, arrSet] = useState<number[]>([])
    const [name, nameSet] = useState(null)
    return (
    <div>
        <div>
            <button onClick={() => arrSet([...arr, arr.length + 1])}>add items to array</button>
            {JSON.stringify(arr)}
        </div>
    </div>
    )
}
export default UseStateComp