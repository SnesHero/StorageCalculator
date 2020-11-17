import React, {useState } from "react";

export const Results = ({_planos, _preco, pressed}) => {
 

    return(
        <div>
            <h1>
            Resultado
            </h1>
            <p>
            Seu plano ideal é o {_planos}!
            </p>
            <p>
            Alugue cada espaço por: {_preco} dinheiros
            </p>
        </div>
    );
};

export default Results