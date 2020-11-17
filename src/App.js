import React, { useState } from "react";
import useApp from "./useApp";
import Results from "./Results";
import "./App.css";

export const App = () => {
  const {
    spaces,
    size,
    rentTime,
    getValues,
    updateSpaces,
    updateSize,
    updateRentTime,
    planos,
    preco,
    getPlanos,
    getPreco,
    getMensal,
    estilo,
    pressed,
  } = useApp();

  const [helptext, setHelptext] = useState(false);

  const showText = () => {
    setHelptext(!helptext);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("button pressed");
    getValues();
    getPlanos();
    getPreco();
    getMensal();
    console.log(pressed);
  };

  return (
    <div className={estilo}>
      <div className="cont_box">
        <h1>Simulador de Aluguel de Armazém</h1>
        <p>Uma aplicação simples usando React Hooks e CSS dinâmico</p>
        <br />
        <form onSubmit={handleSubmit}>
          <label>Número de armazéns: &nbsp; </label>
          <input
            className="inputforms"
            name="spaces"
            type="number"
            min="1"
            value={spaces}
            onChange={updateSpaces}
          />
          <br />
          <label>
            tamanho: &nbsp;
            <input
              className="inputforms"
              type="number"
              min="1"
              value={size}
              onChange={updateSize}
            />{" "}
            &nbsp; m²
          </label>
          <br />

          <label>
            tempo: &nbsp;
            <input
              className="inputforms"
              type="number"
              min="1"
              value={rentTime}
              onChange={updateRentTime}
            />{" "}
            &nbsp; meses
          </label>
          <p />
          <button type="submit">Consultar </button>
        </form>
        <div>
          {pressed ? <Results _planos={planos} _preco={preco} /> : <br />}
        </div>
        <button onClick={() => showText()}>Ver explicação dos planos</button>
        {helptext ? (
          <div className="helptext">
            <p />
            Plano A (laranja): O plano mais básico. Um único espaço de até 10m²
            custando 10$ ao mês.
            <p />
            Plano B (amarelo): Um plano intermediário. Alugue de 1 a 5 espaços
            de até 20m² por 8$ ao mês cada um.
            <p/>
            Plano C (verde): O plano mais sofisticado. 
            Alugue espaços de 20m² ou mais. 
            Os preços variam entre 7$ por um período de até 3 meses ou 5$ por períodos maiores.
          </div>
        ) : (
          <p />

         
        )}
      </div>
    </div>
  );
};

export default App;
