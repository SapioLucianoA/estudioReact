import "./App.css";
import freeCodeCampLogo from "./recourses/imgs/FCC-logo.png"
import Boton from "./components/boton";
import Counter from "./components/counter";
import { useState } from "react";

function App() {
  const [numClics, setNumClics] = useState(0);

  const plusOneButton = () => {
    setNumClics(numClics + 1);
  }

  const restartButton = () => {
    setNumClics(0);
  }
  return (
    <div className="App">
     <div className="div-logo-freCodeCamp">
      <img className="logo-freCodeCamp"
      src={freeCodeCampLogo}
      alt="logo-free-code-camp"/>
     </div>
     <div className="div-principal">

        <Counter
        numClics  = {numClics}
        />

      <Boton
      text= "+1"
      isButtonClick={true}
      clickFunction={plusOneButton}/>
      <Boton
      text= "Restart"
      isButtonClick={false}
      clickFunction={restartButton}/>
     </div>
    </div>
  );
}

export default App;
