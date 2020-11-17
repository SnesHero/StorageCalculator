import React, { useState } from "react";

export default () => {
  const [spaces, setSpaces] = useState(Number);
  const [size, setSize] = useState(Number);
  const [rentTime, setRentTime] = useState(Number);
  const [planos, setPlanos] = useState();
  const [preco, setPreco] = useState();
  const [mensal, setMensal] = useState(Number);
  const [estilo, setEstilo] = useState("App");
  const [pressed, setPressed] = useState(false);

  const getPlanos = () => {
    if (size >= 20) {
      setPlanos("C");
      setEstilo("C-style");
    } else if (size < 20 && spaces > 1) {
      setPlanos("B");
      setEstilo("B-style");
    } else {
      setPlanos("A");
      setEstilo("A-style");
    }
  };

  const getValues = () => {
    console.log(spaces, size, rentTime, planos, mensal);
    setPressed (true);
    
  };

  const updateSpaces = (e) => {
    setSpaces(e.target.value);
  };

  const updateSize = (e) => {
    setSize(e.target.value);
  };

  const updateRentTime = (e) => {
    setRentTime(e.target.value);
  };

  const getMensal = () => {
    if ((planos === "A")) {
      setMensal(10);
    } else if ((planos === "B")) {
      setMensal(8);
    } else if ((planos === "C")) {
      if (rentTime < 3) {
        setMensal(7);
      } else {
        setMensal(5);
      }
    }
  };

  const getPreco = () => {
    setPreco(size * mensal * rentTime);
  };

  return {
    spaces,
    size,
    rentTime,
    getValues,
    updateSpaces,
    updateSize,
    updateRentTime,
    planos,
    getPlanos,
    preco,
    getPreco,
    getMensal,
    estilo,
    pressed,
  };
};
