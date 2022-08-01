import UseStateComp from "./UseStateComp";
import UseEffectComp from './UseEffectComp'
import UseContextComp from "./UseContextComp";
import UseReducerComp from "./UseReducerComp";
const App = () => {

  return (
    <>
     <div>
     <h1>
      useState
     </h1>
     <UseStateComp/>
     <h1>
      useEffect
    </h1>
      <UseEffectComp/> 
      <h1>
        useContext
      </h1>
        <UseContextComp />
      <h1>
        useReducer 
      </h1>
      <UseReducerComp/>
     </div>
    </>
  );
}

export default App;
