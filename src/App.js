import React, {useState } from "react";
import useApp from "./useApp";
import Results from "./Results";
import './App.css';


export const App = () => {
  const {
    spaces,
    size,
    rentTime,
    getValues,
    updateSpaces,
    //getSize,
    updateSize,
    //getRentTime,
    updateRentTime,
    planos,
    getPlanos,
  } = useApp();


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("button pressed")
    getValues();
    getPlanos();
  };

  return (
    <div className="App">
      <h1>Chupisko Armazém</h1>
      <form onSubmit={handleSubmit}>
        <label>Número de armazéns</label>
        <input 
         name="spaces"
         type="number" 
         value={spaces}
         onChange={updateSpaces}
         />
         <button type="submit">
          Consultar
        </button>
        <br/>

        <label>
        tamanho: 
        <input 
        type="number" 
        value={size}
        onChange={updateSize}
        />
        </label>
        <br/>

        <label>
        tempo: 
        <input 
        type="number" 
        value={rentTime}
        onChange={updateRentTime}
        />
        </label>
        <br/>

        
      </form>
      <div>
        <Results
         spaces={spaces}
         size={size}
         rentTime={rentTime}
        />
      </div>
    </div>
  );
}

export default App;
