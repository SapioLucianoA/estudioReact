import './App.css';
import Boton from './componentes/boton';
import Pantalla from './componentes/pantalla';
import BotonCLear from './componentes/botonCLear';
import { useState } from 'react';
import { evaluate } from 'mathjs' 
function App() {
  const [input, setInput] = useState (" ");
  const agregarValorInput = val => {
    setInput(input + val);
  };
  const calcularResultado = () => {
    const regex = /[+\-*/%]{2,}/;
   
    if (regex.test(input)){
      alert("Ingrese un dato valido para continuar")
    }
    else {
      input ? setInput(evaluate(input)) : alert("Ingrese un dato valido para continuar");
    }};
  
  return (
    <div className="App">
      <div className="div-principal">
        <Pantalla input={input} />
        <div className="fila">
          <Boton manejarClick={agregarValorInput} >1</Boton>
          <Boton manejarClick={agregarValorInput} >2</Boton>
          <Boton manejarClick={agregarValorInput} >3</Boton>
          <Boton manejarClick={agregarValorInput} >+</Boton>
        </div>
        <div className="fila">
        <Boton manejarClick={agregarValorInput}>4</Boton>
        <Boton manejarClick={agregarValorInput}>5</Boton>
        <Boton manejarClick={agregarValorInput}>6</Boton>
        <Boton manejarClick={agregarValorInput}>-</Boton>
        </div>
        <div className="fila">
        <Boton manejarClick={agregarValorInput}>7</Boton>
        <Boton manejarClick={agregarValorInput}>8</Boton>
        <Boton manejarClick={agregarValorInput}>9</Boton>
        <Boton manejarClick={agregarValorInput}>*</Boton>
        </div>
        <div className="fila">
        <Boton manejarClick={calcularResultado}>=</Boton>
        <Boton manejarClick={agregarValorInput}>0</Boton>
        <Boton manejarClick={agregarValorInput}>.</Boton>
        <Boton manejarClick={agregarValorInput}>/</Boton>
        </div>
        <div className="fila">
        <BotonCLear manejarClear={() => setInput(" ")}>Clear</BotonCLear>
        </div>
 
      </div>
    </div>
  );
}

export default App;
