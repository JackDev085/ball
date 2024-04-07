import React from 'react';

function Exercicio({ tempo, nomeExercicio, repeticoes, link, onClick }) {
  return (
    <div className="exercicio">
      <div className="tempo">
      <p>{tempo}</p>
      </div>

      <div class="info-exercicio">
        <h3>{nomeExercicio}</h3>
        <span>{repeticoes}</span>
      </div> 
      {/* Utilizando um <span> ao invés de <a> */}
      <span className='play' onClick={onClick}>▶</span>
    </div>
  );
}
export default Exercicio;
