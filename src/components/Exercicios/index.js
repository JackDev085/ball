import React, { useState } from 'react';
import Exercicio from './Exercicio';
import Modal from './Modal';
import './module.Exercicios.css'

function Exercicios() {
  const [videoLink, setVideoLink] = useState("IrA9dvgRKR0"); // Definindo o primeiro vídeo

  const handleVideoClick = (link) => {
    setVideoLink(link);
  };

  return (
    <div className="treino-exercicios">
      <div className="video">
        <Modal
          link={videoLink}
        />
      </div>
      <div className="videos">
        <h2>Treinos restantes (12)</h2>
        <div className="exercicios">

          <Exercicio 
            tempo="1:20"
            nomeExercicio="teste1"
            repeticoes="10 rep"
            link="cYVrhr_F348"
            onClick={() => handleVideoClick("9iZ6rjpGca4")}
          />

          <Exercicio 
            tempo="1:20"
            nomeExercicio="teste2"
            repeticoes="10 rep"
            link="cYVrhr_F348"
            onClick={() => handleVideoClick("G04b-_GZnII")}
          />

          <Exercicio 
            tempo="1:20"
            nomeExercicio="teste3"
            repeticoes="10 rep"
            link="cYVrhr_F348"
            onClick={() => handleVideoClick("XXvWaZDSHv8")}
          />

          <Exercicio 
            tempo="1:20"
            nomeExercicio="teste4"
            repeticoes="10 rep"
            link="cYVrhr_F348"
            onClick={() => handleVideoClick("Wk5paY5G_Qg")}
          />
          {/* Adicione mais componentes Exercicio aqui, cada um com seu próprio onClick */}
        </div>
      </div>
    </div>
  );
}

export default Exercicios;
