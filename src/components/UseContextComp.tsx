import { useContext, useState } from "react";
import UserContext , {UserState} from '../store'

const ConsumerComp = () =>{
    const user  = useContext<UserState>(UserContext)
    return (
        <>
            <div>First : {user.firstName}</div>
            <div>Last : {user.lastName} </div> 
        </>
    )
}

const UseContextComp = () =>{
    const [user, userSet] = useState<UserState>({
      firstName : "someone",
      lastName : "someone lastName"  
    })
    return (
        <>
        <UserContext.Provider value={user}>
        <ConsumerComp />
        <button onClick={() => userSet({
            firstName : "somin" , 
            lastName : "upadhyaya"
        })}>Change value</button>
        </UserContext.Provider>
        </>
    )
}
export default UseContextComp