import React, { useState } from 'react';
import Exercicio from './Exercicio';
import Modal from './Modal';
import './module.Exercicios.css';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Exercicios() {
  const { nomeExerc } = useParams();
  const [videoLink, setVideoLink] = useState(''); // Estado para armazenar o link do vídeo a ser exibido

  // Estrutura de dados representando os vídeos por tipo de treino
  const videosPorTipoTreino = [

    {
      nome: "rotinaCondicionamento", videos: [
        { id: 1, nomeExercicio: "Flexao", repeticoes: '50 repetições', link: "kV4gIXCFgL4" },
        { id: 2, nomeExercicio: "Agachamento", repeticoes: '50 repetições', link: "GXe89NaE9Ss" },
        { id: 3, nomeExercicio: "Abdominal", repeticoes: '50 repetições', link: "-xZ8j6UzMo8" },
        { id: 4, nomeExercicio: "Prancha", repeticoes: '2 séries de 60segundos', link: "A0mh0MMuzV0" },
      ]
    },
    {
      nome: "mediaDistancia", videos: [
        { id: 1, nomeExercicio: "Molde com 1 mão", repeticoes: '2 séries de 10 acertos (cada mão)', link: "fdyMXCpIu0o" },
        { id: 2, nomeExercicio: "Flow do arremesso", repeticoes: '2 séries de 10 acertos', link: "wCSFkDgrexI" },
        { id: 3, nomeExercicio: "Stiff unilateral", repeticoes: '2 séries de 5 acertos (cada perna)', link: "Y13L26prd6g" },
        { id: 4, nomeExercicio: "Lance livre", repeticoes: '2 séries de 10 acertos', link: "rZS4MmTqhOE" },
        { id: 5, nomeExercicio: "Cardio + arremesso 1", repeticoes: '2 séries de 60segundos', link: "wWU5AWjNoC0" },
        { id: 6, nomeExercicio: "Cardio + arremesso 2", repeticoes: '2 séries de 60segundos', link: "omf6E9-5vgU" },
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

          <div className="exercicios">
            {exercicios && exercicios.videos.map((video) => (
              <>
              <Exercicio
              key={video.id}
              img_video={`https://i.ytimg.com/vi/${video.link}/hqdefault.jpg`}
              nomeExercicio={`${video.nomeExercicio}`}
              
              repeticoes={`${video.repeticoes}`}
              link={video.link}
              onClick={() => handleExercicioClick(video.link)}
              />
              </>
            ))}
          </div>
            <h2><Link to="/main">Voltar a página inicial</Link></h2>
        </div>
      </div>
    </div>


  );
}

export default Exercicios;
