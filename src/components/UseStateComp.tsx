import {useState } from 'react'


const UseStateComp = () =>{
    const [arr, arrSet] = useState<number[]>([])
    const [name, nameSet] = useState<string | null>(null)
    return (
    <>
        <div>
            <button onClick={() => arrSet([...arr, arr.length + 1])}>add items to array</button>
            <div>{JSON.stringify(arr)}</div>
        </div>
        <br /><br /><br /><br /><br />
        <div>
            <button onClick={() => nameSet("somin")}>set name</button>
            <div>{JSON.stringify(name)}</div>
        </div>
    </>
    )
}
export default UseStateComp