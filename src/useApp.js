import React, {useState } from "react";

export default () => {
    const[spaces, setSpaces] = useState(Number);
    const[size, setSize] = useState(Number);
    const[rentTime, setRentTime] = useState(Number);
    const [planos, setPlanos] = useState();

    const getPlanos = () =>{
      if(size > 20){
        setPlanos("C");
      }
      else if (size < 20 && spaces > 1){
        setPlanos("B");
      }
      else{setPlanos("A");}
      }
    

    const getValues = (e) => {
       // e.preventDefault();
        // setSpaces(e.target.value);
        // setSize(e.target.value);
        // setRentTime(e.target.value);
        console.log(spaces, size, rentTime, planos);
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

    return{
        spaces,
        size,
        rentTime,
        getValues,
        updateSpaces,
        updateSize,
        updateRentTime,
        planos,
        getPlanos,
    };
};