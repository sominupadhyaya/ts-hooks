import { useReducer } from "react"

const initialState = {
    counter : 0
}
type ACTIONTYPES = 
 | {type : "increment" , payload : number}
 | {type : "decrement" , payload : number}

const counterReducer = (state : typeof initialState , action : ACTIONTYPES) =>{
    switch(action.type){
        case "increment":
            return {
                ...state,
                counter : state.counter + action.payload
            }
        case "decrement":
            return {
                ...state,
                counter : state.counter - action.payload 
            }
        default :
        throw new Error("Bad Action")
    }
}


const UseReducerComp = () =>{
    const [state, dispatch] = useReducer(counterReducer , initialState)
    
    return (
        <>
        <div>{state.counter}</div>
        <button onClick={() => dispatch({
            type : "increment",
            payload : 100
        })}>Increment</button>

        <button onClick={() =>dispatch({
            type : "decrement", 
            payload : 50 
        })}>Decrement</button>
        </>
    )
}

export default UseReducerComp