import UseStateComp from "./UseStateComp";
import UseEffectComp from './UseEffectComp'
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
     </div>
    </>
  );
}

export default App;
