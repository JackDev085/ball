import React from 'react';
import { Link } from 'react-router-dom';

function Exercicio({ img_video, nomeExercicio, repeticoes, link, onClick , nomeTreino}) {

  return (
    <>
        <div className="exercicio">
          <div className="tempo">
          <img src={img_video} alt="Capa do vídeo" />
          </div>

          <div class="info-exercicio">
            <h3>{nomeExercicio}</h3>
            <span>{repeticoes}</span>
          </div> 
            <span className='play' onClick={onClick}>▶</span>
            </div>

           </>
  );
}
export default Exercicio;
