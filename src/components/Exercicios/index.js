import React, { useState } from 'react';
import Exercicio from './Exercicio';
import Modal from './Modal';
import './module.Exercicios.css';
import { useParams } from 'react-router-dom';

function Exercicios() {
  const { nomeExerc } = useParams();
  const [videoLink, setVideoLink] = useState(''); // Estado para armazenar o link do vídeo a ser exibido

  // Estrutura de dados representando os vídeos por tipo de treino
  const videosPorTipoTreino = [

    {
      nome: "rotinaCondicionamento", videos: [
        { id: 1, nomeExercicio: "Flexao", repeticoes: '1X50rep', link: "kV4gIXCFgL4" },
        { id: 2, nomeExercicio: "Agachamento", repeticoes: '1X50rep', link: "GXe89NaE9Ss" },
        { id: 3, nomeExercicio: "Abdominal", repeticoes: '1X50rep', link: "-xZ8j6UzMo8" },
        { id: 4, nomeExercicio: "Prancha", repeticoes: '2x60seg', link: "A0mh0MMuzV0" },
      ]
    },
    {
      nome: "rotinaArremesso", videos: [
        { id: 1, nomeExercicio: "Arremesso com 1 mão", repeticoes: '2x10rep (cada mão)', link: "Wv66_-GKNlQ" },
        { id: 2, nomeExercicio: "Ldl arremesso", repeticoes: '2x10rep (cada perna)', link: "MrzI1oYb8WI" },
        { id: 3, nomeExercicio: "Lance livre", repeticoes: '2x20rep', link: "WhKX8k0SHHA" },
        { id: 4, nomeExercicio: "Arremesso em movimento", repeticoes: '2x10rep', link: "dCHnDyOmWng" },
        { id: 4, nomeExercicio: "Arremesso com 1 drible", repeticoes: '2x10rep', link: "AzGSQMy2L2w" },
      ]
    },
    // Adicione mais tipos de treino conforme necessário
  ];


  // Encontre os vídeos correspondentes ao tipo de exercício
  const exercicios = videosPorTipoTreino.find(exercicio => exercicio.nome === nomeExerc);

  // Defina o primeiro vídeo como link padrão, se houver
  if (exercicios && exercicios.videos.length > 0 && !videoLink) {
    setVideoLink(exercicios.videos[0].link);
  }

  // Função para lidar com o clique em um exercício e carregar o vídeo correspondente
  const handleExercicioClick = (link) => {
    setVideoLink(link);
  };

  return (
    <div className="exercicios-main">
      <div className="treino-exercicios">
        <div className="video">
          <Modal link={videoLink} />
        </div>
        <div className="videos">
          <h2>Bom treino 😎💪🏾</h2>
          <div className="exercicios">
            {exercicios && exercicios.videos.map((video) => (
              <Exercicio
                key={video.id}
                tempo="x"
                nomeExercicio={`${video.nomeExercicio}`}

                repeticoes={`${video.repeticoes}`}
                link={video.link}
                onClick={() => handleExercicioClick(video.link)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exercicios;
