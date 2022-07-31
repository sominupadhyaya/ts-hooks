import UseStateComp from "./UseStateComp";
import UseEffectComp from './UseEffectComp'
import UseContextComp from "./UseContextComp";

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
      <UseEffectComp/>  {/*doing this so that the laptop doesnt break*/} 
      <h1>
        UseContext
      </h1>
        <UseContextComp />
     </div>
    </>
  );
}

export default App;
